import Tester from '../../components/Tester'

export const tester2 = {
  label: 'Tester 2',
  component: Tester,
  fields: [
    {
      name: 'id',
      label: 'Tester ID',
      widget: 'string'
    },
    {
      name: 'title',
      label: 'Title',
      widget: 'string'
    },
    {
      name: 'description',
      label: 'Description',
      widget: 'string',
    },
    {
      name: 'marked-body',
      label: 'Marked Body',
      widget: 'markdown'
    }
  ]
}

export const tester = {
  label: 'Tester 1',
  component: Tester,
  fields: [
    {
      name: 'id',
      label: 'Tester ID',
      widget: 'string'
    },
    {
      name: 'title',
      label: 'Title',
      widget: 'string'
    },
    {
      name: 'description',
      label: 'Description',
      widget: 'text'
    }
  ]
}
