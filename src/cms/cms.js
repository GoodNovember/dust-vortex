import CMS, { init } from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

import { blogCollection } from './collections/blogCollection'
import { pageCollection } from './collections/pageCollection'

// import { tester2 } from './editor-components/tester'
// import { youtube } from './editor-components/youtube'

import { editorComponents } from './configuration.js'



init({
  config: {
    // backend: {
    //   name: 'git-gateway',
    //   branch: 'master'
    // },
    backend: {
      name: 'github',
      repo: 'GoodNovember/dust-vortex'
    },
    media_folder: 'static/img',
    public_folder: '/img',
    collections: [
      blogCollection,
      pageCollection,
    ]
  }
})

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

// CMS.registerEditorComponent(tester)
// CMS.registerEditorComponent(youtube)

// export const components = GenerateComponents({
//   'tester-elm-two': tester2
// })

editorComponents.map(compConfig => CMS.registerEditorComponent(compConfig))
