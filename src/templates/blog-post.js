import React from 'react'
import PropTypes from 'prop-types'

const Template = props => {
  const { content, description, tags, title } = props

  return (
    <div>
      <div>BLOG POST TEMPLATE</div>
      {/* <pre>props: { JSON.stringify(props, null, '  ') }</pre> */}
      <div>{ title }</div>
      <div>{ description }</div>
      <div>{ content }</div>
      <div>{ tags }</div>
    </div>
  )
}

Template.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.object,
  content: PropTypes.any
}

export default Template
