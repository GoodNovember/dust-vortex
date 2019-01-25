import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BlogLink = styled.div``

const BlogLinkMaker = rootPath => (id, { slug, title }) => <BlogLink key={id}><Link to={`${rootPath}/${id}`}>{title}</Link></BlogLink>

const Template = props => {
  const { data } = props
  const { standardsQuery } = data
  const page = props.pageResources.page
  const standards = standardsQuery.edges.map(({ node }) => {
    const standard = node.childMarkdownRemark
    return standard
  })

  const linkMaker = BlogLinkMaker(page.path)

  const links = standards.map(standard => {
    return linkMaker(standard.id, standard.frontmatter)
  })

  return (
    <div>
      <div>Standard Index Page</div>
      <div>{ links }</div>
    </div>
  )
}

Template.propTypes = {
  pageResources: PropTypes.object,
  data: PropTypes.object
}

export default Template

export const query = graphql`
  {
    standardsQuery:allFile(filter:{ sourceInstanceName:{eq:"standards"} }){
      edges{
        node{
          childMarkdownRemark{
            id
            excerpt
            frontmatter{
              kind
              title
              description
              date
              slug
            }
          }
        }
      }
    }
  }
`
