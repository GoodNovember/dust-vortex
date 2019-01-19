import React, { Component } from 'react'
import { StyleSheetManager } from 'styled-components'

// Here is a little ditty that injects Styled Component's generated stylesheet
// into the preview iframe of Netlify CMS

export class StyleSheetWrapper extends Component {
  componentDidMount () {
    const iframe = document.getElementsByTagName('iframe')[0]
    /* eslint-disable */
    const headTarget = iframe ? iframe.contentDocument ? iframe.contentDocument.head : null : null
    this.setState({ headTarget })
  }
  render () {
    const { state, props } = this
    const { children } = props
    if (state && state.headTarget) {
      return ( <StyleSheetManager target={ state.headTarget }>{ children }</StyleSheetManager> )
    }else{
      return children   
    }

  }
}
