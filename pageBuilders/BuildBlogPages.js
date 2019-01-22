const path = require('path')

const BuildBlogPages = ({ graphql, actions }) => new Promise((resolve, reject) => {
  const { createPage } = actions

  const query = `
  {
    posts:allFile(filter:{ sourceInstanceName:{ eq:"blog-posts" } }){
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
    settings:allFile(filter:{name:{eq:"blogSettings"}}){
      edges{
        node{
          childMarkdownRemark{
            frontmatter{
              blogPrefix
              blogName
            }
          }
        }
      }
    }
  }
  `

  graphql(query).then(result => {
    const { errors, data } = result
    const { posts, settings } = data
    if (errors) {
      errors.map(e => console.error(e))
      reject(errors)
    } else {
      const blogPostArray = posts ? posts.edges.map(({ node }) => node.childMarkdownRemark) : []
      const blogSettingsObject = settings ? data.settings.edges[0].node.childMarkdownRemark.frontmatter : {}
      const { blogPrefix, blogName } = blogSettingsObject

      const pagePrefix = blogPrefix || 'blog'

      blogPostArray.map(({ id, frontmatter }) => {
        const { slug, templateKey } = frontmatter

        const pagePath = `${pagePrefix}/${slug || id}`

        createPage({
          path: pagePath,
          component: path.resolve(__dirname, `../src/templates/${templateKey}.js`),
          context: {
            id,
            prefix: pagePrefix,
            blogName
          }
        })
      })

      if (blogPostArray.length === 0) {
        console.log('No Blog Post Pages Made.')
      } else {
        createPage({
          path: pagePrefix,
          component: path.resolve(__dirname, '../src/templates/blog-index.js'),
          context: {
            prefix: pagePrefix,
            blogName
          }
        })
      }

      resolve()
    }
  })
})

module.exports = { BuildBlogPages }
