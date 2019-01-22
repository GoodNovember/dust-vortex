export const MakeFieldWidget = widget => props => {
  return Object.assign({}, props, { widget })
}

export const Fallback = fallbackValue => testValue => testValue || fallbackValue

export const HiddenField = MakeFieldWidget('hidden')
export const StringField = MakeFieldWidget('string')
export const TextField = MakeFieldWidget('text')
export const DateTimeField = MakeFieldWidget('datetime')
export const MarkdownField = MakeFieldWidget('markdown')
export const ListField = MakeFieldWidget('list')
export const ImageField = MakeFieldWidget('image')
export const ObjectField = MakeFieldWidget('object')

export const Kind = kindString => {
  return HiddenField({ default: kindString, name: 'kind', label: 'Kind' })
}

export const TemplateKey = templateString => {
  return HiddenField({
    default: templateString,
    name: 'templateKey',
    label: 'Template Key'
  })
}

export const Title = label => StringField({
  label: Fallback('Title')(label),
  name: 'title'
})

export const Body = props => MarkdownField(Object.assign({}, {
  name: 'body', label: 'Body' }), props)

export const Image = props => ImageField({ ...props })

export const Slug = () => StringField({ label: 'Slug', name: 'slug' })
