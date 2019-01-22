import {
  TemplateKey,
  Kind,
  Title,
  TextField,
  MarkdownField,
  DateTimeField,
  ListField,
  Slug
} from '../utils/fields'

import previewComponent from '../preview-templates/BlogPostPreview'

export const collection = {
  label: 'Blog Posts',
  label_singular: 'Blog Post',
  folder: 'src/content/blog',
  create: true,
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  previewComponent,
  fields: [
    Kind('blog-post'),
    TemplateKey('blog-post'),
    Title(),
    Slug(),
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
