const path = require('path')

const createBlogPages = ({ actions, data, graphql }) => {
  const { createPage } = actions
  const blogPosts = data.blogPosts.edges

  const blogSettings = data.blogSettings.edges[0].node.childMarkdownRemark
  const prefix = blogSettings.frontmatter.blogPrefix || 'blog'

  if (blogPosts.length > 0) {
    blogPosts.forEach(({ node }) => {
      const { id } = node.childMarkdownRemark
      const { templateKey } = node.childMarkdownRemark.frontmatter
      const pagePath = `${prefix.toLowerCase()}/${id}`
      createPage({
        path: pagePath,
        component: path.resolve(__dirname, `../src/templates/${templateKey}.js`),
        context: { id }
      })
      console.log(`BLOG Page: ${pagePath}`)
    })
    createPage({
      path: `${prefix}`,
      component: path.resolve(__dirname, `../src/templates/blog-index.js`)
    })
  } else {
    console.info('NOTE: No Blog Pages created.')
  }
}

module.exports = { createBlogPages }
