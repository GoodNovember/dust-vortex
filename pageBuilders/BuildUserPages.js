const path = require('path')
const BuildUserPages = ({ graphql, actions }) => new Promise((resolve, reject) => {
  const { createPage } = actions
  const query = `
  {
    userPages:allFile(filter:{ sourceInstanceName:{ eq:"user-pages" } }){
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
    const { userPages } = data
    if (errors) {
      errors.map(e => console.error(e))
      reject(errors)
    } else {
      if (userPages) {
        const userPageArray = data.userPages.edges.map(({ node }) => node.childMarkdownRemark)
        userPageArray.map(({ id, frontmatter }) => {
          const { slug, templateKey } = frontmatter
          const pagePath = `${slug || id}`
          createPage({
            path: pagePath,
            component: path.resolve(__dirname, `../src/templates/${templateKey}.js`),
            context: { id }
          })
        })
        if (userPageArray.length === 0) {
          console.log('No User Pages Built')
        }
      } else {
        console.error('No user pages?')
      }
      resolve()
    }
  })
})
module.exports = { BuildUserPages }
