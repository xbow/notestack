import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uid from 'uid';

import List from './List.js'
import Edit from './Edit.js'
import TagBrowser from './TagBrowser.js'

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

let dummyTags = [
  { id: uid(), name: 'Foo' },
  { id: uid(), name: 'Fritz' },
  { id: uid(), name: 'Brobnar' },
  { id: uid(), name: 'Five' },
  { id: uid(), name: 'Badabam' },
]

class App extends Component {

  state = {
    notes: this.loadNotes(),
    tags: this.loadTags(),
    keywords: this.loadKeywords(),
  }

  saveNote = (id, body, tagIDs, newTags) => {
    const { notes } = this.state
    const index = notes.findIndex(item => item.id === id)
    const newTagIDs = newTags.map(tag => tag.id)
    const tagIDsToSave = tagIDs.concat(newTagIDs)

    this.setState({
      notes: id == null ? [
        {
          id: uid(),
          body,
          tagIDs: tagIDsToSave
        },
        ...notes
      ] : [
          ...notes.slice(0, index),
          { ...notes[index], body, tagIDs: tagIDsToSave },
          ...notes.slice(index + 1)
        ],
      tags: [
        ...newTags,
        ...this.state.tags
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

  saveNotes () {
    localStorage.setItem('Notestack', JSON.stringify(this.state.notes))
  }

  saveTags () {
    localStorage.setItem('Notestack-Tags', JSON.stringify(this.state.tags))
  }

  saveKeywords () {
    localStorage.setItem('Notestack-Keywords', JSON.stringify(this.state.keywords))
  }

  loadNotes () {
    try {
      return JSON.parse(localStorage.getItem('Notestack')) || dummyNotes
    } catch (err) {
      return dummyNotes
    }
  }

  loadTags () {
    try {
      return JSON.parse(localStorage.getItem('Notestack-Tags')) || dummyTags
    } catch (err) {
      return dummyTags
    }
  }

  loadKeywords () {
    try {
      return JSON.parse(localStorage.getItem('Notestack-Keywords')) || []
    } catch (err) {
      return []
    }
  }

  render () {
    this.saveNotes()
    this.saveTags()
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" render={() => <List items={this.getExcerpts()} />} />
          <Route path="/list" render={() => <List items={this.getExcerpts()} />} />
          <Route path="/create" render={() => <Edit tags={this.state.tags} onSubmit={this.saveNote} />} />
          <Route
            path="/edit/:id"
            render={({ match }) => <Edit tags={this.state.tags} note={this.getNoteById(match.params.id)}
              onSubmit={this.saveNote} />}
          />
          <Route path="/tags" render={() => <TagBrowser tags={this.state.tags} />} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
