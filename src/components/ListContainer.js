import List from './List'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  items: getExcerpts(state, ownProps.showArchived)
})

export default connect(mapStateToProps)(List)

const getExcerpts = (state, showArchived) => {
  console.log('getExcerpts', showArchived)
  const notes = state.notes.filter(note => note.isArchived === showArchived )
  console.log(notes)
  const firstNWords = /(([^\s]+\s\s*){28})(.*)/s
  return notes.map(note => {
    return {
      id: note.id,
      excerpt: note.body.replace(firstNWords, "$1…"),
      tags: note.tagIDs ? note.tagIDs.map(tagID => state.tags.find(tag => tag.id === tagID)) : []
    }
  })
}