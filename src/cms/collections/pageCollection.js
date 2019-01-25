import {
  TemplateKey,
  Kind,
  Body,
  Title,
  Slug,
  Tags
  // ImageField,
  // StringField
  // // ObjectField,
  // // TextField,
  // // ListField,
} from '../utils/fields'

import previewComponent from '../preview-templates/UserPagePreview'

const collection = {
  label: 'Pages',
  label_singular: 'Page',
  previewComponent,
  folder: 'src/content/user-pages',
  create: true,
  fields: [
    Kind('page'),
    TemplateKey('user-page'),
    Title(),
    Slug(),
    Body(),
    Tags()
  ]
}

export default collection
