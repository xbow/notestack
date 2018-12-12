import { combineReducers } from 'redux-starter-kit'
import appReducer from './appReducer'
import editReducer from './editReducer'

export default combineReducers({
  app: appReducer,
  edit: editReducer,
})