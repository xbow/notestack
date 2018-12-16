import View from './View'
import { connect } from 'react-redux'
import { getNoteById, getTagsByNoteId } from '../duck/selectors'
import { toggleIsArchived } from '../duck/actions'

const mapStateToProps = (state, ownProps) => ({
  note: getNoteById(ownProps.noteID, state),
  tags: getTagsByNoteId(ownProps.noteID, state)
})

const mapDispatchToProps = {
  onArchive: toggleIsArchived
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
