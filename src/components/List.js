import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Status from './Status'
import Menu from './Menu'
import Card from './Card'
import Icon from './Icon'
import CreateButton from './CreateButton'
import { breakpoint, maxWidth, overWidth } from './res/breakpoint'
import * as color from './res/colors'

const Wrapper = styled.div`
  height: 100vh;
  max-width: ${maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-areas: "menu"
                       "status"
                       "main"
                       "footer";
  grid-template-rows: 48px 32px auto 0px;
  
  @media screen and (min-width: ${breakpoint}) {
    grid-template-areas: ".    status"
                         "menu main"
                         "footer footer";
    grid-template-rows: 32px auto 0px;
    padding: 0 24px;
    grid-gap: 5px 48px;
  }

  @media screen and (min-width: ${maxWidth}) {
    padding-right: 9vw; 
  }

  .menu {
    grid-area: menu;
  }

  .status {
    grid-area: status;
  }

  .main {
    grid-area: main;
    overflow-y: scroll;
  }

  .footer {
    grid-area: footer;
    position: relative;
    background: deeppink;
  }
`

const Main = styled.main`
  padding: 0;    
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
      label: 'Create note'
    },
    {
      icon: 'tag',
      link: '/tags',
      label: 'Browse tags'
    },
    {
      icon: 'trash',
      link: '/trash',
      label: 'Inspect trash'
    }
  ]

  render () {
    const { items } = this.props

    return (
      <Wrapper>
        <Menu className="menu" navItems={this.navItems} />
        <Status className="status">Status</Status>
        <Main className="main">
          {items
            ? items.map(item => <Card key={item.id} id={item.id} text={item.excerpt} tags={item.tags} />)
            : <EmptyMessage>no cards found</EmptyMessage>}
        </Main>
        <div className="footer">
          <CreateButton>
            <Link className="no-link" to="/create">
              <Icon name="plus-circle" />
            </Link>
          </CreateButton>
        </div>
      </Wrapper>
    )
  }
}
