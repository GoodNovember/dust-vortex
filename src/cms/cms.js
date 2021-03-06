import React from 'react'
import CMS, { init } from 'netlify-cms'
import collections from './collections'
import { editorComponents } from './configuration.js'
import { StyleSheetWrapper } from './utils/StyleSheetWrapper.js'

init({
  config: {
    backend: {
      name: 'github',
      repo: 'GoodNovember/dust-vortex'
    },
    media_folder: 'static/img',
    public_folder: '/img',
    collections
  }
})

collections.forEach(
  ({ name, previewComponent }) => {
    if (previewComponent) {
      const wrappedComponent = (
        <StyleSheetWrapper interiorComponent={previewComponent} />
      )
      CMS.registerPreviewTemplate(name, wrappedComponent)
    }
  }
)

editorComponents.map(compConfig => CMS.registerEditorComponent(compConfig))
