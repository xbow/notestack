import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }


  navIcons = [
    {
      name: 'tag',
      link: '/tags'
    },
    {
      name: 'plus-circle',
      link: '/create'
    },
  ]

  render () {
    const { items } = this.props
    return (
      <PageWrapper>
        <Navbar icons={this.navIcons}></Navbar>
        <Main>
          {items
            ? items.map(item => <Card key={item.id} id={item.id} text={item.excerpt} tags={item.tags} />)
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
