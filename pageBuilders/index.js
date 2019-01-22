const { BuildBlogPages } = require('./BuildBlogPages')
const { BuildUserPages } = require('./BuildUserPages')
const { BuildStandardPages } = require('./BuildStandardPages')

module.exports = (props) => [
  BuildBlogPages(props),
  BuildUserPages(props),
  BuildStandardPages(props)
]
