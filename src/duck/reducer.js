import { createReducer } from 'redux-starter-kit'
import initialState from './initialState'

const toggleIsArchived = (state, action) => {
  const noteID = action.payload
  const { notes } = state
  const index = notes.findIndex(note => note.id === noteID)

  return {
    ...state,
    notes: [
      ...notes.slice(0, index),
      { ...notes[index], isArchived: !notes[index].isArchived },
      ...notes.slice(index + 1)
    ]
  }
}

const saveNote = (state, action) => {
  const { id, body, tagIDs, newTags } = action.payload
  const { notes } = state
  const index = notes.findIndex(note => note.id === id)
  const newTagIDs = newTags.map(tag => tag.id)
  const tagIDsToSave = tagIDs.concat(newTagIDs)

  return {
    ...state,
    notes: index === -1 ? [
      {
        id,
        body,
        tagIDs: tagIDsToSave
      },
      ...notes
    ] : [
        ...notes.slice(0, index),
        { ...notes[index], body, tagIDs: tagIDsToSave },
        ...notes.slice(index + 1)
      ],
    tags: [
      ...newTags,
      ...state.tags
    ]
  }
}

export default createReducer(initialState, {
  saveNote,
  toggleIsArchived,
})