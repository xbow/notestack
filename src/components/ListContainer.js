import List from './List'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  items: getExcerpts(state)
})

export default connect(mapStateToProps)(List)

const getExcerpts = state => {
  const firstNWords = /(([^\s]+\s\s*){28})(.*)/s
  return state.notes.map(note => {
    return {
      id: note.id,
      excerpt: note.body.replace(firstNWords, "$1…"),
      tags: note.tagIDs ? note.tagIDs.map(tagID => state.tags.find(tag => tag.id === tagID)) : []
    }
  })
}