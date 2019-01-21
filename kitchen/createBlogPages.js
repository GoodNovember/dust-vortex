const path = require('path')

const createBlogPages = ({ actions, data, graphql }) => {
  const { createPage } = actions
  const blogPosts = data.blogPosts.edges

  const blogSettings = data.blogSettings.edges[0]

  if (blogPosts.length > 0) {
    blogPosts.forEach(({ node }) => {
      const { id } = node.childMarkdownRemark
      const { templateKey } = node.childMarkdownRemark.frontmatter

      const prefix = blogSettings.frontmatter.blogPrefix || 'blog'

      createPage({
        path: `${prefix.toLowerCase()}/${id}`,
        component: path.resolve(__dirname, `../src/templates/${templateKey}.js`),
        context: { id }
      })
    })
  } else {
    console.info('NOTE: No Blog Pages created.')
  }
}

module.exports = { createBlogPages }
