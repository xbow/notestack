import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import Footer from './Footer'
import TextButton from './TextButton'
import TagList from './TagList'

const Main = styled.main`
  padding: 5px;
  overflow-y: scroll;
`

const Left = styled.span`
  margin-right: auto;
`

export default class View extends Component {

  navIcons = [
    {
      name: 'tag',
      link: '/tags'
    },
    {
      name: 'list',
      link: '/list'
    },
  ]

  render () {
    const { note, tags } = this.props
    return (
      <PageWrapper>
        <Navbar icons={this.navIcons} />
        <Main>
          <TagList tags={tags} />
          <ReactMarkdown
            source={note.body}
          />
        </Main>
        <Footer>
          <Left>
            <Link to="/list">
              <TextButton label="List notes" />
            </Link>
          </Left>
          <Link to={'/edit/' + note.id}>
            <TextButton label="Edit this note" />
          </Link>
        </Footer>
      </PageWrapper>
    )
  }
}
