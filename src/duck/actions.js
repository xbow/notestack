import { createAction } from 'redux-starter-kit'

// App actions
export const saveNote = createAction('saveNote')
export const toggleIsArchived = createAction('toggleIsArchived')

// Editor actions
export const createNote = createAction('createNote')
export const loadNote = createAction('loadNote')
export const updateNoteBody = createAction('updateNoteBody')
export const updateOwnState = createAction('updateOwnState')
export const pickTag = createAction('pickTag')
export const addNewTag = createAction('addNewTag')
