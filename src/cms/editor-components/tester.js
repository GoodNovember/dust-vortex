import React from 'react'
import { TagToolkit } from '../utils'
import Tester from '../../components/Tester'

const { parse, create, pattern } = TagToolkit('tester-elm')

export const tester = {
  id: 'tester',
  label: 'Tester',
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
  ],
  pattern,
  fromBlock (match) {
    return parse(match[0])
  },
  toBlock (obj) {
    return create(obj)
  },
  toPreview (obj) {
    const { id, description, title } = obj
    return (
      <Tester id={id} title={title} description={description}/>
    )
  }
}
