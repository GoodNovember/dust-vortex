import {
  TemplateKey,
  Kind,
  Body,
  Title
  // ImageField,
  // StringField
  // // ObjectField,
  // // TextField,
  // // ListField,
} from '../utils/fields'

export const collection = {
  label: 'Pages',
  label_singular: 'Page',
  folder: 'src/content/user-pages',
  create: true,
  fields: [
    Kind('page'),
    TemplateKey('page'),
    Title(),
    Body()
  ]
}
