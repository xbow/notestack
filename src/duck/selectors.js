// App

export const getNoteById = (id, state) => {
  const index = state.notes.findIndex(item => item.id === id)
  return state.notes[index]
}

export const getTagsByNoteId = (id, state) => {
  const tagIDs = getNoteById(id, state).tagIDs
  if (tagIDs) return tagIDs.map(tagID => state.tags.find(tag => tag.id === tagID))
}

// Edit

const getNoteTags = () => {
  return state.tagIDs
    .map(id => props.tags.find(tag => tag.id === id))
    .concat(state.newTags)
}

const getSuggestableTags = () => {
  const allTags = props.tags
  const tagIDsToExclude = state.tagIDs
  return allTags.filter(tag => !tagIDsToExclude.includes(tag.id))
}

const getHasTopic = () => {
  return getNoteTags().filter(tag => tag.topic).length > 0
}