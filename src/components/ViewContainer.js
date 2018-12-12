import View from './View'
import { connect } from 'react-redux'
import { getNoteById, getTagsByNoteId } from '../duck/selectors'

const mapStateToProps = (state, ownProps) => ({
  note: getNoteById(ownProps.noteID, state),
  tags: getTagsByNoteId(ownProps.noteID, state)
})

export default connect(mapStateToProps)(View)
