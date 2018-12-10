import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import Wrapper from './NoteWrapper'
import Status from './Status'
import Navbar from './Navbar'
import Footer from './Footer'
import TextButton from './TextButton'
import TagList from './TagList'
import Icon from './Icon'
import LeftButton from './LeftButton'
import EditButton from './EditButton'


const Main = styled.main`
  padding: 0 5px;
  overflow-y: scroll;
  position: relative;
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
      <Wrapper>
        <Status className="status">Status</Status>
        <aside className="taglist">
          <TagList className="note-page" tags={tags} />
        </aside>
        <Main className="main">
          <ReactMarkdown
            source={note.body}
          />
          <EditButton>
            <Link className="no-link" to={'/edit/' + note.id}>
              <Icon name="edit" />
            </Link>
          </EditButton>
        </Main>
        <footer className="footer">
          <LeftButton>
            <Link className="no-link" to="/list">
              <Icon name="back" />
            </Link>
          </LeftButton>
        </footer>
      </Wrapper>
    )
  }
}
