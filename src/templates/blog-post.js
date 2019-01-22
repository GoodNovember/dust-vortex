import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

const TagElm = styled.div`
  border: 1px solid black;
  padding: .5rem;
  display: inline-block;
  margin: .25rem;
`

export const BlogPostTemplate = props => {
  const { title, content, tags, parentLink } = props

  const backLink = parentLink ? (<Link to={parentLink}>Back to Blog</Link>) : null
  const compiledTags = Array.from(tags.reduce((acc, tag) => {
    if (acc.has(tag) === false) {
      acc.add(tag)
    }
    return acc
  }, new Set())).map((tag, index) => {
    return <TagElm key={`${index}_${tag}`}>{ tag }</TagElm>
  })
  return (
    <div>
      <div>Title: { title }</div>
      { backLink }
      { content }
      <div>Tags:{ compiledTags }</div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  tags: PropTypes.array,
  parentLink: PropTypes.string
}

const GatsbyDataMapTemplate = props => {
  const { pageContext, data } = props
  const { prefix } = pageContext
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
  const { title, tags } = frontmatter
  const content = <div dangerouslySetInnerHTML={{ __html: html }} />
  return (<BlogPostTemplate title={title} content={content} tags={tags} parentLink={prefix} />)
}

GatsbyDataMapTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageResources: PropTypes.object,
  pageContext: PropTypes.object,
  data: PropTypes.object,
  tags: PropTypes.object,
  content: PropTypes.any
}

export default GatsbyDataMapTemplate

export const query = graphql`
  query FindBlogPost($id: String){
    allMarkdownRemark(filter:{id:{eq:$id}}){
      edges{
        node{
          html
          frontmatter{
            title
            date
            slug
            tags
          }
        }
      }
    }
  }
`
