export const getNoteById = (id, state) => {
  const index = state.notes.findIndex(item => item.id === id)
  return state.notes[index]
}

export const getTagsByNoteId = (id, state) => {
  const tagIDs = getNoteById(id, state).tagIDs
  if (tagIDs) return tagIDs.map(tagID => state.tags.find(tag => tag.id === tagID))
}