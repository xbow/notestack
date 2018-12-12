import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uid from 'uid';

import { configureStore } from 'redux-starter-kit'
import reducer from '../duck/reducer'
import { saveNote } from '../duck/actions'

import List from './List.js'
import Edit from './Edit.js'
import View from './View.js'
import TagBrowser from './TagBrowser.js'

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

  saveNote = (id, body, tagIDs, newTags) => {
    store.dispatch(saveNote({
      id,
      body,
      tagIDs,
      newTags
    }))
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
      <Router>
        <React.Fragment>
          <Route exact path="/" render={() => <List items={this.getExcerpts(state)} />} />
          <Route path="/list" render={() => <List items={this.getExcerpts(state)} />} />
          <Route
            path="/note/:id"
            render={({ match }) => <View
              note={this.getNoteById(match.params.id, state)}
              tags={this.getTagsByNoteId(match.params.id, state)}
            />}
          />
          <Route path="/create" render={() => <Edit tags={state.tags} onSubmit={this.saveNote} />} />
          <Route
            path="/edit/:id"
            render={({ match }) => <Edit tags={state.tags} note={this.getNoteById(match.params.id, state)}
              onSubmit={this.saveNote} />}
          />
          <Route path="/tags" render={() => <TagBrowser tags={state.tags} />} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
