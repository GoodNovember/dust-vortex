import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BlogLink = styled.div``

const BlogLinkMaker = rootPath => (id, { slug, title }) => <BlogLink key={id}><Link to={`${rootPath}/${slug}`}>{title}</Link></BlogLink>

const Template = props => {
  const { data } = props
  const { blogPostsQuery } = data
  const page = props.pageResources.page
  const posts = blogPostsQuery.edges.map(({ node }) => {
    const post = node.childMarkdownRemark
    return post
  })

  const linkMaker = BlogLinkMaker(page.path)

  const links = posts.map(post => {
    return linkMaker(post.id, post.frontmatter)
  })

  return (
    <div>
      <div>Blog Index Page</div>
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
    blogPostsQuery:allFile(filter:{ sourceInstanceName:{eq:"blog-posts"} }){
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
