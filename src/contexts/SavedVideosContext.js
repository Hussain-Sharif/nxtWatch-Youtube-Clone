import React from 'react'

const SavedVideosContext = React.createContext({
  listOfSavedVideos: null,
  saveVideos: () => {},
  unSaveVideos: () => {},
})

export default SavedVideosContext
