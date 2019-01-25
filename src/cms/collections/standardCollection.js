import {
  TemplateKey,
  Kind,
  // Title,
  // TextField,
  NumberField,
  MarkdownField,
  StringField,
  SelectField,
  Tags
} from '../utils/fields'

import previewComponent from '../preview-templates/StandardPreview'

const collection = {
  label: 'Educational Standards',
  label_singular: 'Standard',
  folder: 'src/content/educational-standards',
  create: true,
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  previewComponent,
  fields: [
    Kind('standard'),
    TemplateKey('standard'),
    StringField({
      name: 'title',
      label: 'Title',
      hint: 'The title of the standard, including the GSE code at the beginning. Ex: "SS1H1 Read about and describe the life of historical figures in American history."'
    }),
    SelectField({
      name: 'class',
      label: 'Class',
      default: 'SS',
      options: [
        {
          label: '(SS) Social Studies',
          value: 'SS'
        }
      ],
      hint: 'Currently, there is only Social Studies currently implemented.'
    }),
    SelectField({
      name: 'grade',
      label: 'Grade Level',
      options: [
        {
          label: '(K) Kindergarden',
          value: 'K'
        },
        {
          label: '(1) 1st Grade',
          value: '1'
        },
        {
          label: '(2) 2nd Grade',
          value: '2'
        },
        {
          label: '(3) 3rd Grade',
          value: '3'
        },
        {
          label: '(4) 4th Grade',
          value: '4'
        },
        {
          label: '(5) 5th Grade',
          value: '5'
        },
        {
          label: '(6) 6th Grade',
          value: '6'
        },
        {
          label: '(7) 7th Grade',
          value: '7'
        },
        {
          label: '(8) 8th Grade',
          value: '8'
        },
        {
          label: '(9) 9th Grade',
          value: '9'
        },
        {
          label: '(10) 10th Grade',
          value: '10'
        },
        {
          label: '(11) 11th Grade',
          value: '11'
        },
        {
          label: '(12) 12th Grade',
          value: '12'
        }
      ]
    }),
    SelectField({
      name: 'domainLabel',
      label: 'Domain',
      options: [
        {
          label: '(H) Historical Understandings',
          value: 'H'
        },
        {
          label: '(G) Geographic Understandings',
          value: 'G'
        },
        {
          label: '(CG) Government / Civic Understandings',
          value: 'CG'
        },
        {
          label: '(E) Economic Understandings',
          value: 'E'
        }
      ]
    }),
    NumberField({
      name: 'domainNumber',
      label: 'Domain Number',
      valueType: 'int',
      min: 1,
      hint: 'This is the last number in the GSE code.'
    }),
    MarkdownField({
      name: 'body',
      label: 'Articles',
      hint: 'Here you should add the alphabetical list of articles for this standard, if any. I suggest using Markdown Mode and having a blank line in between each entry.',
      required: false
    }),
    Tags()
  ]
}

export default collection
