import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { PageWrapper } from './PageWrapper'
import List from './List.js'
import Edit from './Edit.js'

let notes = [
  { body: 'This is a placeholder note. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, auctor vestibulum dignissim nec, consectetur ut tellus. In auctor venenatis luctus.' },
  { body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
  { body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ' },
  { body: 'This is a placeholder note. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, auctor vestibulum dignissim nec, consectetur ut tellus. In auctor venenatis luctus.' },
  { body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
  { body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ' },
  { body: 'This is a placeholder note. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, auctor vestibulum dignissim nec, consectetur ut tellus. In auctor venenatis luctus.' },
  { body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
  { body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ' },
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
    return notes.map(item => {
      return {
        excerpt: item.body.replace(/(([^\s]+\s\s*){18})(.*)/, "$1…")
      }
    })
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
