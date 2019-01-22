const path = require('path')
const BuildStandardPages = ({ graphql, actions }) => new Promise((resolve, reject) => {
  const { createPage } = actions
  const query = `
  {
    standards:allFile(filter:{ sourceInstanceName:{ eq:"user-pages" } }){
      edges{
        node{
          childMarkdownRemark{
            id
            frontmatter{
              slug
              templateKey
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
        standardArray.map(({ id, frontmatter }) => {
          const { slug, templateKey } = frontmatter
          const pagePath = `gse/${slug || id}`
          createPage({
            path: pagePath,
            component: path.resolve(__dirname, `../src/templates/${templateKey}.js`),
            context: { id }
          })
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
