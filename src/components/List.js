import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import PageWrapper from './PageWrapper'
import Menu from './Menu'
import NewNoteFooter from './NewNoteFooter'
import Card from './Card'
import TextButton from './TextButton'
import { breakpoint } from './res/breakpoint'

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: "menu"
                       "status"
                       "main"
                       "footer";
  
  @media screen and (min-width: ${breakpoint}) {
    grid-template-areas: "menu status"
                         "menu main"
                         "footer footer";
  }

  & .menu {
    grid-area: menu;
  }

  & .status {
    grid-area: status;
    background: lime;
  }

  & .main {
    grid-area: main;
    overflow-y: scroll;
    padding: 0 5px;
  }

  & .footer {
    grid-area: footer;
    background: hotpink;
  }
`

const Main = styled.main`

`

const EmptyMessage = styled.div`
  padding: 65px 5px;
  text-align: center;
`

export default class List extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }


  navItems = [
    {
      icon: 'plus-circle',
      link: '/create',
      label: 'Create Note'
    },
    {
      icon: 'tag',
      link: '/tags',
      label: 'Browse tags'
    },
    {
      icon: 'trash',
      link: '/trash',
      label: 'Show trash'
    }
  ]

  render () {
    const { items } = this.props

    return (
      <Wrapper>
        <Menu className="menu" navItems={this.navItems} />
        <div className="status">Status</div>
        <Main className="main">
          {items
            ? items.map(item => <Card key={item.id} id={item.id} text={item.excerpt} tags={item.tags} />)
            : <EmptyMessage>no cards found</EmptyMessage>}
        </Main>
        <div className="footer">Footer</div>
        {/* <NewNoteFooter className="footer">
          <Link to="/create">
            <TextButton label="Create" />
          </Link>
        </NewNoteFooter> */}
      </Wrapper>
    )
  }
}
