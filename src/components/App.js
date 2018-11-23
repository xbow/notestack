import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { PageWrapper } from './PageWrapper'
import List from './List.js'
import Edit from './Edit.js'

let notes = [
  { body: 'This is a placeholder note. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, auctor vestibulum dignissim nec, consectetur ut tellus. In auctor venenatis luctus.' }
]

class App extends Component {

  saveNote = body => {
    notes = [
      { body: body },
      ...notes
    ]
    // Remove this when the List component is finished
    console.log(notes)
  }

  getCardsData = () => {
    const cards = notes.map(item => item.body
      .replace(/(([^\s]+\s\s*){20})(.*)/, "$1…"))
    console.log(cards)
    return cards
  }


  render () {
    return (
      <Router>
        <PageWrapper>
          <Route exact path="/" render={() => <List getCardsData={this.getCardsData} />} />
          <Route path="/list" render={() => <List getCardsData={this.getCardsData} />} />
          <Route path="/create" render={() => <Edit onSubmit={this.saveNote} />} />
        </PageWrapper>
      </Router>
    )
  }
}

export default App;
