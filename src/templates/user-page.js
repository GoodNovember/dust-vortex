import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const UserPageTemplate = props => {
  const { title, content } = props

  return (
    <div>
      <div>Title: { title }</div>
      { content }
    </div>
  )
}

UserPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object
}

const GatsbyDataMapTemplate = props => {
  const { data } = props
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
  const { title } = frontmatter
  const content = <div dangerouslySetInnerHTML={{ __html: html }} />
  return (<UserPageTemplate title={title} content={content} />)
}

GatsbyDataMapTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageResources: PropTypes.object,
  pageContext: PropTypes.object,
  data: PropTypes.object,
  content: PropTypes.any
}

export default GatsbyDataMapTemplate

export const query = graphql`
  query FindUserPage($id: String){
    allMarkdownRemark(filter:{id:{eq:$id}}){
      edges{
        node{
          html
          frontmatter{
            title
            date
            slug
          }
        }
      }
    }
  }
`
