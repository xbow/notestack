import Edit from './Edit'
import { connect } from 'react-redux'
import { saveNote } from '../duck/actions'

const mapStateToProps = (state, ownProps) => ({
  tags: state.tags,
  note: getNoteById(ownProps.noteID, state)
})

const mapDispatchToProps = {
  onSubmit: saveNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)

const getNoteById = (id, state) => {
  const index = state.notes.findIndex(item => item.id === id)
  return state.notes[index]
}