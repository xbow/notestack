import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'

import { configureStore } from 'redux-starter-kit'
import reducer from '../duck/reducers/editReducer'
import { Provider } from 'react-redux'

import uid from 'uid';
import { Controlled as CodeMirror } from 'react-codemirror2'

import PropTypes from 'prop-types'
import * as color from './res/colors'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import Footer from './Footer'
import TextButton from './TextButton'
import TagInput from './TagInput'
import TagList from './TagList'

require('codemirror/mode/markdown/markdown.js');
require('./res/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');

const store = configureStore({ reducer })

const Main = styled.main`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
`

const Left = styled.span`
  margin-right: auto;
`

export default class Edit extends Component {

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

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    note: PropTypes.object
  }

  componentDidMount () {
    store.subscribe(() => this.forceUpdate())
  }

  componentDidUpdate () {
    const state = store.getState()
    state.id === null && this.initializeEditor()
  }

  componentWillUnmount () {
    store.getState().body !== '' && this.saveNoteToApp()
  }

  initializeEditor () {
    if (!this.props.note) {
      this.props.createNote()
    }
    else {
      const { id, body, tagIDs } = this.props.note
      this.props.loadNote({ id, body, tagIDs })
    }
  }

  changeHandler = value => {
    this.props.updateNoteBody((value), () => this.autoSaveHandler(1200))
  }

  autoSaveHandler = (delay = 0) => {
    const { body, tagIDs, newTags } = store.getState()
    clearTimeout(this.timer)
    if (body !== '') {
      this.timer = setTimeout(() => {
        console.log('saving...')
        this.saveNoteToApp()
        this.props.updateOwnState({ tagIDs, newTags })
      }, delay)
    }
  }

  saveNoteToApp = () => {
    const { id, body, tagIDs, newTags } = store.getState()
    this.props.onSubmit(
      {
        id,
        body: body,
        tagIDs,
        newTags,
      }
    )
  }

  addNewTag = (tagName, isTopic) =>
    this.props.addNewTag({ tagName, isTopic },
      () => this.autoSaveHandler())

  getNoteTags = state => {
    return state.tagIDs
      .map(id => this.props.tags.find(tag => tag.id === id))
      .concat(state.newTags)
  }

  getSuggestableTags = state => {
    const allTags = this.props.tags
    const tagIDsToExclude = state.tagIDs
    return allTags.filter(tag => !tagIDsToExclude.includes(tag.id))
  }

  getHasTopic = state => {
    return this.getNoteTags(state).filter(tag => tag.topic).length > 0
  }

  render () {
    const state = store.getState()
    return (
      <Provider store={store}>
        <PageWrapper>
          <Navbar icons={this.navIcons} />
          <Main>
            <TagList tags={this.getNoteTags(state)} />
            <TagInput
              hasTopic={this.getHasTopic(state)}
              suggestableTags={this.getSuggestableTags(state)}
              appliedTags={this.getNoteTags(state)}
              onPick={this.props.pickTag}
              addNewTag={this.props.addNewTag}
            />
            <CodeMirror
              value={state.body}
              options={{
                mode: 'markdown',
                lineWrapping: 'true',
              }}
              onBeforeChange={(editor, data, value) => {
                this.changeHandler(value)
              }}
              onChange={(editor, data, value) => {
                this.autoSaveHandler(1200)
              }}
            />
          </Main>
          <Footer>
            <Left><Link to="/list">
              <TextButton label="List notes" />
            </Link></Left>
            {state.id &&
              <Link to={'/note/' + state.id}>
                <TextButton label="View this note" />
              </Link>}
          </Footer>
        </PageWrapper >
      </ Provider>

    )
  }
}
