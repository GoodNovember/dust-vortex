const path = require('path')

const createBlogPages = ({ actions, data, graphql }) => {
  const { createPage } = actions
  const blogPosts = data.blogPosts.edges
  if (blogPosts.length > 0) {
    blogPosts.forEach(({ node }) => {
      const { id } = node.childMarkdownRemark
      const { templateKey } = node.childMarkdownRemark.frontmatter
      createPage({
        path: `blog/${id}`,
        component: path.resolve(__dirname, `../src/templates/${templateKey}.js`),
        context: { id }
      })
    })
  } else {
    console.info('NOTE: No Blog Pages created.')
  }
}

module.exports = { createBlogPages }
