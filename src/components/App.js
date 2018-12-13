import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { configureStore } from 'redux-starter-kit'
import reducer from '../duck/reducers/index'
import { Provider } from 'react-redux'

import ListContainer from './ListContainer'
import EditContainer from './EditContainer'
import ViewContainer from './ViewContainer'
import TagBrowserContainer from './TagBrowserContainer'

const store = configureStore({ reducer })

const saveNotes = state => {
  localStorage.setItem('Notestack', JSON.stringify(state.notes))
}

const saveTags = state => {
  localStorage.setItem('Notestack-Tags', JSON.stringify(state.tags))
}


store.subscribe(() => {
  const state = store.getState()
  this.saveNotes(state)
  this.saveTags(state)
})
class App extends Component {

  render () {
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
