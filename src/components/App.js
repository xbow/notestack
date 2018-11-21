import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import List from './List.js'
import Edit from './Edit.js'


/* NOT IN USE 
const Wrapper = styled.div`
  background-color: lightgreen;
` */

let notes = [
  { body: 'This is a placeholder note. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, auctor vestibulum dignissim nec, consectetur ut tellus. In auctor venenatis luctus.' }
]

class App extends Component {

  saveNote = body => {
    notes = [
      { body: body },
      ...notes
    ]

    console.log(notes)
  }

  render () {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" render={() => <List />} />
          <Route path="/list" render={() => <List />} />
          <Route path="/create" render={() => <Edit onSubmit={this.saveNote} />} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
