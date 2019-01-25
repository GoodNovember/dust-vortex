const path = require('path')
const BuildStandardPages = ({ graphql, actions }) => new Promise((resolve, reject) => {
  const { createPage } = actions
  const query = `
  {
    standards:allFile(filter:{ sourceInstanceName:{ eq:"standards" } }){
      edges{
        node{
          childMarkdownRemark{
            id
            frontmatter{
              slug
            }
          }
        }
      }
    }
  }
  `
  graphql(query).then(result => {
    const { errors, data } = result
    const { standards } = data
    if (errors) {
      errors.map(e => console.error(e))
      reject(errors)
    } else {
      if (standards) {
        const standardArray = data.standards.edges.map(({ node }) => node.childMarkdownRemark)
        const pathPrefix = `standard`
        standardArray.map(({ id, frontmatter }, index, array) => {
          const { slug } = frontmatter
          const pagePath = `${pathPrefix}/${slug || id}`
          createPage({
            path: pagePath,
            component: path.resolve(__dirname, `../src/templates/standard.js`),
            context: { id, prefix: pathPrefix }
          })
          if (index === array.length - 1) {
            // finally, we create the index page.
            createPage({
              path: `${pathPrefix}`,
              component: path.resolve(__dirname, `../src/templates/standard-index.js`),
              context: { prefix: pathPrefix }
            })
          }
        })
        if (standardArray.length === 0) {
          console.log('No Standard Pages Built')
        }
      } else {
        console.error('No standard pages?')
      }
      resolve()
    }
  })
})
module.exports = { BuildStandardPages }
