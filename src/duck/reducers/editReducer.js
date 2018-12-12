import { createReducer } from 'redux-starter-kit'
import initialState from './editInitialState'
import uid from 'uid'

import { getHasTopic } from '../selectors'

const createNote = (state, action) => {
  return ({
    id: uid(),
    body: '',
    tagIDs: [],
    newTags: [],
  })
}

const loadNote = (state, action) => {
  const { id, body, tagIDs } = action.payload
  return ({
    id,
    body,
    tagIDs,
    newTags: [],
  })
}

const updateNoteBody = (state, action) => {
  const value = action.payload
  return ({
    ...state,
    body: value,
  })
}

const updateTagsAfterSaving = (state, action) => {
  const { tagIDs, newTags } = action.payload
  const newTagIDs = newTags.map(tag => tag.id)
  const updatedTagIDs = tagIDs.concat(newTagIDs)
  return ({
    ...state,
    newTags: [],
    tagIDs: updatedTagIDs,
  })
}

const pickTag = (state, action) => {
  const id = action.payload
  return ({
    ...state,
    tagIDs: [
      ...state.tagIDs,
      id
    ],
    hasTopic: getHasTopic()
  })
}

const addNewTag = (state, action) => {
  const { tagName, isTopic } = action.payload
  return ({
    ...state,
    newTags: [
      ...state.newTags,
      {
        id: uid(),
        topic: isTopic,
        name: tagName
      }
    ]
  })
}

export default createReducer(initialState, {
  createNote,
  loadNote,
  updateNoteBody,
  updateTagsAfterSaving,
  pickTag,
  addNewTag,
})