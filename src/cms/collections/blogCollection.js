import {
  TemplateKey,
  Kind,
  Title,
  TextField,
  MarkdownField,
  DateTimeField,
  ListField
} from '../utils/fields'

export const blogCollection = {
  name: 'blog',
  label: 'Blog Posts',
  label_singular: 'Blog Post',
  folder: 'src/content/blog',
  create: true,
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  fields: [
    Kind('blog-post'),
    TemplateKey('blog-post'),
    Title(),
    DateTimeField({
      name: 'date',
      label: 'Publish Date'
    }),
    TextField({
      name: 'description',
      label: 'Description'
    }),
    MarkdownField({
      name: 'body',
      label: 'Body'
    }),
    ListField({
      name: 'tags',
      label: 'Tags'
    })
  ]
}
