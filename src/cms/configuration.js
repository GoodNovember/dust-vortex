import { GenerateComponents } from './utils/GenerateComponents'
import { tester, tester2 } from './editor-components/tester'

// This file holds the compiled editorComponets for Netlify-CMS
// and the component for RehypeReact

const configuration = {
  'tester-elm': tester,
  'tester-elm-two': tester2
}

export const {
  editorComponents,
  components
} = GenerateComponents(configuration)
