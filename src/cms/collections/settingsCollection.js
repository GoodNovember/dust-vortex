import {
  // TemplateKey,
  Kind,
  // Body,
  // Title,
  // ImageField,
  StringField
  // // ObjectField,
  // // TextField,
  // // ListField,
} from '../utils/fields'

const collection = {
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
        Kind('blogSettings'),
        StringField({
          name: 'blogName',
          label: 'Blog Name'
        }),
        StringField({
          name: 'blogPrefix',
          label: 'Blog Prefix'
        })
      ]
    }
  ]
}

export default collection
