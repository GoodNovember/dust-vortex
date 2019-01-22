const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const PageBuilders = require('./pageBuilders')

exports.createPages = props => Promise.all(PageBuilders(props))

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node) // convert image paths for gatsby images
}
