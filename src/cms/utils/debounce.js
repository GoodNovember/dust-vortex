export const debounce = (fn, wait, immediate) => {
  let timerHolder = null
  return function () {
    const context = this
    const args = arguments
    const later = () => {
      timerHolder = null
      if (!immediate) {
        fn.apply(context, args)
      }
    }
    const callNow = immediate && !timerHolder
    clearTimeout(timerHolder)
    timerHolder = setTimeout(later, wait)
    if (callNow) {
      fn.apply(context, args)
    }
  }
}

// const GenerateRegexPatternForTag = tagString => {
//   return new RegExp(`<(${ tagString }) .+></(${ tagString })>`)
// }

// const CreateNewTag = (tagString, attributesObject) => {
//   const parsedAttributes = Object.keys(attributesObject).map(key => {
//     const value = attributesObject[key]
//     return `${ key }="${ encodeURI(String(value)) }"`
//   }).join(' ')
//   return `<${ tagString } ${ parsedAttributes }></${ tagString }>`
// }

// const ParseTag = (tagString, htmlString) => {
//   const frag = document.createRange().createContextualFragment(htmlString)
//   const elm = frag.querySelector(tagString)
//   if (elm) {
//     const { attributes } = elm
//     return Array.from(attributes)
//       .reduce((acc, { name, value }) => {
//         acc[name] = decodeURI(value)
//         return acc
//       }, {})
//   } else {
//     return null
//   }
// }

// export const TagToolkit = tagString => {
//   const parse = html => ParseTag(tagString, html)
//   const create = attrObj => CreateNewTag(tagString, attrObj)
//   const pattern = GenerateRegexPatternForTag(tagString)
//   const toBlock = debounce(create, 500) // Notice the debounce. Notice it.
//   const fromBlock = match => parse(match[0])
//   return { pattern, fromBlock, toBlock }
// }
