// This is where we map the Netlify Connections to a name
// and this name is used for both internally for the collection
// and also to bind the previewComponent to said collection
// as well.

// having all the collections in a centralized object helps to catch any
// naming conflicts between collections.

import * as BlogCollection from './blogCollection'
import * as PageCollection from './pageCollection'
import * as SettingsCollection from './settingsCollection'

export default {
  'blog': BlogCollection,
  'pages': PageCollection,
  'settings': SettingsCollection
}
