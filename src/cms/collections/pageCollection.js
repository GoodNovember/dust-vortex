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

export const pageCollection = {
  name: 'page',
  label: 'Pages',
  label_singular: 'Page',
  folder: 'src/content/pages',
  fields: [
    Kind('page'),
    TemplateKey('page'),
    Title(),
    Body(),
  ]
}
