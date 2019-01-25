// This is where we map the Netlify Connections to a name
// and this name is used for both internally for the collection
// and also to bind the previewComponent to said collection
// as well.

// having all the collections in a centralized object helps to catch any
// naming conflicts between collections.

import BlogCollection from './blogCollection'
import PageCollection from './pageCollection'
import SettingsCollection from './settingsCollection'
import StandardCollection from './standardCollection'

const collectionMap = {
  'blog': BlogCollection,
  'pages': PageCollection,
  'settings': SettingsCollection,
  'standards': StandardCollection
}

const collectionOrder = [
  'blog',
  'pages',
  'standards',
  'settings' // lets keep this last
]

const unsortedCollection = Object.keys(collectionMap).reduce((acc, name) => {
  acc.push(Object.assign({}, { name }, collectionMap[name]))
  return acc
}, [])

const sortedCollection = collectionOrder.map(sortName => {
  return unsortedCollection.find(({ name }) => (sortName === name))
})

export default sortedCollection
