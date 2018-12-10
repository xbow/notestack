import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import PageWrapper from './PageWrapper'
import Menu from './Menu'
import NewNoteFooter from './NewNoteFooter'
import Card from './Card'
import TextButton from './TextButton'
import Icon from './Icon'
import { breakpoint } from './res/breakpoint'
import * as color from './res/colors'

const Wrapper = styled.div`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-areas: "menu"
                       "status"
                       "main"
                       "footer";
  
  @media screen and (min-width: ${breakpoint}) {
    grid-template-areas: "menu status"
                         "menu main"
                         "footer footer";

    grid-template-rows: 40px auto 0;
  }

  & .menu {
    grid-area: menu;
  }

  & .status {
    grid-area: status;
    margin: auto 5px 0;
    padding-bottom: 5px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${color.lineLight};
    color: ${color.lightText};
  }

  & .main {
    grid-area: main;
    overflow-y: scroll;
    padding: 0 5px;
  }

  & .footer {
    grid-area: footer;
    position: relative;  
  }
`

const Main = styled.main`

`

const EmptyMessage = styled.div`
  padding: 65px 5px;
  text-align: center;
`

const CreateButton = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;

  & svg {
    height: 42px;
    width: 42px;
    fill: ${color.background};
  }
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
        <div className="status">Status</div>
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
