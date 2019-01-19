import React from 'react'
// import { debounce } from './debounce'

// This is consolidates and compiles the configurations of
// Netlify CMS Editor Components
// and provides the 'components' for RehypeReact's renderAst
// which is facilitated by gatsby-remark-component

const GenerateRegexPatternForTag = tagString => {
  return new RegExp(`<(${ tagString }) .+></(${ tagString })>`)
}

const CreateNewTag = (tagString, attributesObject) => {
  const parsedAttributes = Object.keys(attributesObject).map(key => {
    const value = attributesObject[key]
    return `${ key }="${ encodeURI(String(value)) }"`
  }).join(' ')
  return `<${ tagString } ${ parsedAttributes }></${ tagString }>`
}

const ParseTag = (tagString, htmlString) => {
  const frag = document.createRange().createContextualFragment(htmlString)
  const elm = frag.querySelector(tagString)
  if (elm) {
    const { attributes } = elm
    return Array.from(attributes)
      .reduce((acc, { name, value }) => {
        acc[name] = decodeURI(value)
        return acc
      }, {})
  } else {
    return null
  }
}

const ParseMatch = tagString => match => ParseTag(tagString, match[0])
const WriteNewTag = tagString => attrObj => CreateNewTag(tagString, attrObj)

export const GenerateComponents = mapObj => {
  return Object.keys(mapObj)
    .reduce((acc, tagString) => {
      const { component, label, fields } = mapObj[tagString]
      const Component = component
      const toBlock = WriteNewTag(tagString)
      // const toBlock = attrObj => {
      //   const output = CreateNewTag(tagString, attrObj)
      //   console.log('To Block', attrObj, output)
      //   return output
      // }
      const fromBlock = ParseMatch(tagString)
      // const fromBlock = match => {
      //   const output = ParseTag(tagString, match[0])
      //   console.log('From Block', match[0], output)
      //   return output
      // }
      const pattern = GenerateRegexPatternForTag(tagString)
      const toPreview = attrObj => <Component { ...attrObj }/>
      const id = tagString
      acc.editorComponents.push({
        id,
        label,
        fields,
        pattern,
        toBlock,
        fromBlock,
        toPreview
      })
      acc.components[tagString] = component
      return acc
    }, { editorComponents: [], components: {} })
}
