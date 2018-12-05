import React, { Component } from 'react'
import styled from 'styled-components'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import NewNoteFooter from './NewNoteFooter'

const TagBrowserList = styled.main`
  padding: 5px 8px;
`

export default class TagBrowser extends Component {

  navIcons = [
    {
      name: 'list',
      link: '/list'
    },
    {
      name: 'plus-circle',
      link: '/create'
    },
  ]

  render () {
    const { tags } = this.props
    const tagsInAlphabeticalOrder = tags.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;
    })

    return (
      <PageWrapper>
        <Navbar icons={this.navIcons} />
        <TagBrowserList>
          {tagsInAlphabeticalOrder.map(tag => <div key={tag.id}>{tag.name}</div>
          )}
        </TagBrowserList>
        <NewNoteFooter />
      </PageWrapper>
    )
  }
}
