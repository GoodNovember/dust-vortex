import {
  // TemplateKey,
  // Kind,
  // Body,
  // Title,
  // ImageField,
  StringField
  // // ObjectField,
  // // TextField,
  // // ListField,
} from '../utils/fields'

export const collection = {
  label: 'Settings',
  editor: {
    preview: false
  },
  files: [
    {
      name: 'blogSettings',
      file: 'src/content/settings/blogSettings.md',
      label: 'Blog Settings',
      fields: [
        StringField({
          name: 'blogPrefix',
          label: 'Blog Prefix'
        })
      ]
    }
  ]
}
