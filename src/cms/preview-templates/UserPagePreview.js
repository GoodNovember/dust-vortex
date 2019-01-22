import React from 'react'
import PropTypes from 'prop-types'
import { UserPageTemplate } from '../../templates/user-page.js'

const UserPagePreview = props => {
  const { widgetFor, entry } = props
  return (
    <UserPageTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

UserPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default UserPagePreview
