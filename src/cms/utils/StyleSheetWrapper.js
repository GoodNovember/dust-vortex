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
    const { state } = this
    const { interiorComponent, ...props } = this.props
    const InteriorComponent = interiorComponent
    if (state && state.headTarget) {
      return ( <StyleSheetManager target={ state.headTarget }><InteriorComponent { ...props } /></StyleSheetManager> )
    }else{
      return <InteriorComponent { ...props } />  
    }
  }
}
