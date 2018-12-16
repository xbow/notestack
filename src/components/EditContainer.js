import Edit from './Edit'
import { connect } from 'react-redux'
import { getNoteById } from '../duck/selectors'
import { saveNote, toggleIsArchived } from '../duck/actions'

const mapStateToProps = (state, ownProps) => ({
  tags: state.tags,
  note: getNoteById(ownProps.noteID, state)
})

const mapDispatchToProps = {
  onSubmit: saveNote,
  onArchive: toggleIsArchived,
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
