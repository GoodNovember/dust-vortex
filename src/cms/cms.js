import CMS, { init } from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

import { blogCollection } from './collections/blogCollection'
import { pageCollection } from './collections/pageCollection'

import { tester } from './editor-components/tester'
import { youtube } from './editor-components/youtube'

init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'master'
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

CMS.registerEditorComponent(tester)
CMS.registerEditorComponent(youtube)
