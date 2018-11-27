import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import NewNoteFooter from './NewNoteFooter'
import TextButton from './TextButton'

const Main = styled.main`
  padding: 5px;
  overflow-y: scroll;
`

const Card = styled.section`
  margin: 12px 0;
  border: 1px solid #ccc;
  padding: 16px 8px;
`

const IconMore = styled.span`
  display: inline-block;
  float: right;
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
      <Card>{item.excerpt}
        <IconMore>
          <Link to={`/edit/${item.id}`}>[...]</Link>
        </IconMore>
      </Card>
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
