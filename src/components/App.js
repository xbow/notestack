import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uid from 'uid';

import { configureStore } from 'redux-starter-kit'
import reducer from '../duck/reducer'
import { saveNote } from '../duck/actions'
import { Provider } from 'react-redux'

import ListContainer from './ListContainer'
import EditContainer from './EditContainer'
import ViewContainer from './ViewContainer'
import TagBrowserContainer from './TagBrowserContainer'

const store = configureStore({ reducer })

class App extends Component {

  componentDidMount () {
    store.subscribe(() => this.forceUpdate())
  }

  componentDidUpdate () {
    const state = store.getState()
    this.saveNotes(state)
    this.saveTags(state)
  }

  getExcerpts = state => {
    const firstNWords = /(([^\s]+\s\s*){28})(.*)/s
    return state.notes.map(note => {
      return {
        id: note.id,
        excerpt: note.body.replace(firstNWords, "$1…"),
        tags: note.tagIDs ? note.tagIDs.map(tagID => state.tags.find(tag => tag.id === tagID)) : []
      }
    })
  }

  getNoteById = (id, state) => {
    const index = state.notes.findIndex(item => item.id === id)
    return state.notes[index]
  }

  getTagsByNoteId = (id, state) => {
    const tagIDs = this.getNoteById(id, state).tagIDs
    if (tagIDs) return tagIDs.map(tagID => state.tags.find(tag => tag.id === tagID))
  }

  saveNotes = state => {
    localStorage.setItem('Notestack', JSON.stringify(state.notes))
  }

  saveTags = state => {
    localStorage.setItem('Notestack-Tags', JSON.stringify(state.tags))
  }

  render () {
    const state = store.getState()
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route exact path="/" render={() => <ListContainer />} />
            <Route path="/list" render={() => <ListContainer />} />
            <Route
              path="/note/:id"
              render={({ match }) => <ViewContainer noteID={match.params.id} />}
            />
            <Route path="/create" render={() => <EditContainer />} />
            <Route
              path="/edit/:id"
              render={({ match }) => <EditContainer noteID={match.params.id} />}
            />
            <Route path="/tags" render={() => <TagBrowserContainer />} />
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
