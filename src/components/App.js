import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uid from 'uid';

import List from './List.js'
import Edit from './Edit.js'

let dummyNotes = [
  { id: uid(), body: 'This is a placeholder note. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, auctor vestibulum dignissim nec, consectetur ut tellus. In auctor venenatis luctus.' },
  { id: uid(), body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
  { id: uid(), body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ' },
  { id: uid(), body: 'This is a placeholder note. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, auctor vestibulum dignissim nec, consectetur ut tellus. In auctor venenatis luctus.' },
  { id: uid(), body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
  { id: uid(), body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ' },
  { id: uid(), body: 'This is a placeholder note. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, auctor vestibulum dignissim nec, consectetur ut tellus. In auctor venenatis luctus.' },
  { id: uid(), body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
  { id: uid(), body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ' },
]

class App extends Component {

  state = {
    notes: this.load()
  }

  saveNote = (id, body) => {
    const { notes } = this.state
    const index = notes.findIndex(item => item.id === id)

    this.setState({
      notes: id == null ? [
        {
          id: uid(),
          body
        },
        ...notes
      ] : [
          ...notes.slice(0, index),
          { ...notes[index], body },
          ...notes.slice(index + 1)
        ]
    })
  }

  getExcerpts = () => {
    const first14Words = /(([^\s]+\s\s*){14})(.*)/s
    return this.state.notes.map(item => {
      return {
        id: item.id,
        excerpt: item.body.replace(first14Words, "$1…")
      }
    })
  }

  getNoteById = (id) => {
    const index = this.state.notes.findIndex(item => item.id === id)
    return this.state.notes[index]
  }

  save () {
    localStorage.setItem('Notestack', JSON.stringify(this.state.notes))
  }

  load () {
    try {
      return JSON.parse(localStorage.getItem('Notestack')) || dummyNotes
    } catch (err) {
      return dummyNotes
    }
  }

  render () {
    this.save()
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" render={() => <List getExcerpts={this.getExcerpts} />} />
          <Route path="/list" render={() => <List getExcerpts={this.getExcerpts} />} />
          <Route path="/create" render={() => <Edit onSubmit={this.saveNote} />} />
          <Route
            path="/edit/:id"
            render={({ match }) => <Edit note={this.getNoteById(match.params.id)}
              onSubmit={this.saveNote} />}
          />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
