export const youtube = {
  id: 'youtube',
  label: 'Youtube Video',
  fields: [
    {
      name: 'id',
      label: 'Youtube Video ID',
      widget: 'string'
    }
  ],
  pattern: /^youtube (\S+)$/,
  fromBlock (match) {
    return match[1]
  },
  toBlock (obj) {
    return `youtube ${ obj.id }`
  },
  toPreview (obj) {
    /* eslint-disable */
    return `<img src="http://img.youtube.com/vi/${ obj.id }/maxresdefault.jpg" alt="Youtube Video"/>`
  }
}
