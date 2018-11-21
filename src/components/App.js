import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import List from './List.js'
import Edit from './Edit.js'

const Wrapper = styled.div`
  background-color: lightgreen;
`

class App extends Component {
  render () {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" render={() => <List />} />
          <Route path="/list" render={() => <List />} />
          <Route path="/create" render={() => <Edit />} />
        </Wrapper>
      </Router>
    )
  }
}

export default App;
