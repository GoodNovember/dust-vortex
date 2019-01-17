// import { JSDOM } from 'jsdom'

const GenerateRegexPatternForTag = tagString => {
  return new RegExp(`<(${ tagString }) .+></(${ tagString })>`)
}

const CreateNewTag = (tagString, attributesObject) => {
  const parsedAttributes = Object.keys(attributesObject).map(key => {
    const value = attributesObject[key]
    return `${ key }="${ value }"`
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
        acc[name] = value
        return acc
      }, {})
  } else {
    return null
  }
}

export const TagToolkit = tagString => {
  return {
    parse: html => ParseTag(tagString, html),
    create: attributesObject => CreateNewTag(tagString, attributesObject),
    pattern: GenerateRegexPatternForTag(tagString)
  }
}
