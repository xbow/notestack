import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import NewNoteFooter from './NewNoteFooter'
import Card from './Card'
import Footer from './Footer'
import TextButton from './TextButton'

const Main = styled.main`
  padding: 0 5px;
  overflow-y: scroll;
`

const EmptyMessage = styled.div`
  padding: 65px 5px;
  text-align: center;
`

const Left = styled.span`
  margin-right: auto;
`

export default class List extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    showArchived: PropTypes.bool
  }

  navIcons = !this.props.showArchived
    ? [
      {
        name: 'trash',
        link: '/trash'
      },
      {
        name: 'plus-circle',
        link: '/create'
      },
    ] : [
      {
        name: 'list',
        link: '/list'
      },
      {
        name: 'plus-circle',
        link: '/create'
      },
    ]

  render() {
    const { items } = this.props
    return (
      <PageWrapper>
        <Navbar icons={this.navIcons}></Navbar>
        <Main>
          {items.length > 0
            ? items.map(item =>
              <Card
                key={item.id}
                id={item.id}
                text={item.excerpt}
                tags={item.tags}
                link={!this.props.showArchived &&
                  '/note/' + item.id}
                buttons={this.props.showArchived &&
                  [{ icon: 'restore', action: () => this.props.onRestore(item.id) }]}
              />)
            : <EmptyMessage>No notes found</EmptyMessage>
          }
        </Main>
        {!this.props.showArchived
          ? <NewNoteFooter />
          : <Footer>
            <Left>
              <Link to="/list">
                <TextButton label="Back to list" />
              </Link>
            </Left>
          </Footer>
        }
      </PageWrapper>
    )
  }
}
