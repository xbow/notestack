import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import NewNoteFooter from './NewNoteFooter'
import Card from './Card'
import TextButton from './TextButton'

const Main = styled.main`
  padding: 0 5px;
  overflow-y: scroll;
`

const EmptyMessage = styled.div`
  padding: 65px 5px;
  text-align: center;
`

export default class List extends Component {

  navIcons = [
    {
      name: 'search',
      link: '/search'
    },
    {
      name: 'tag',
      link: '/tags'
    }
  ]

  render () {
    const { items } = this.props

    return (
      <PageWrapper>
        <Navbar icons={this.navIcons}></Navbar>
        <Main>
          {items
            ? items.map(item => <Card id={item.id} text={item.excerpt} />)
            : <EmptyMessage>no cards found</EmptyMessage>}
        </Main>
        <NewNoteFooter>
          <Link to="/create">
            <TextButton label="Create" />
          </Link>
        </NewNoteFooter>
      </PageWrapper>

    )
  }
}
