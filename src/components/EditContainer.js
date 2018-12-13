import Edit from './Edit'
import { connect } from 'react-redux'
import { getNoteById } from '../duck/selectors'
import {
  saveNote,
  createNote,
  loadNote,
  updateNoteBody,
  updateOwnState,
  pickTag,
  addNewTag
} from '../duck/actions'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    tags: state.app.tags,
    note: getNoteById(ownProps.noteID, state.app),
    id: ownProps.noteID,
  }
}

const mapDispatchToProps = {
  onSubmit: saveNote,
  createNote,
  loadNote,
  updateNoteBody,
  updateOwnState,
  pickTag,
  addNewTag
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
