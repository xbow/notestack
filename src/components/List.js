import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import NewNoteFooter from './NewNoteFooter'
import Card from './Card'
import TextButton from './TextButton'

const Main = styled.main`
  padding: 5px;
  overflow-y: scroll;
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

  renderCards = () => {
    return this.props.getExcerpts().map(item => (
      <Card id={item.id} text={item.excerpt} />
    ))
  }

  render () {
    return (
      <PageWrapper>
        <Navbar icons={this.navIcons}></Navbar>
        <Main>
          {this.renderCards()}
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
