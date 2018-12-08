import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
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

  nextRoute = '/list'
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

  /* 
    default props do not seem to work as expected.
    I seem to be solving everything in the constructor.
    maybe I should get rid of them? 
  */

  static defaultProps = {
    note: {
      id: null,
      inputBody: '',
      tagIDs: [],
      newTags: [],
    }
  }

  constructor(props) {
    super(props)
    const { id, body, tagIDs, newTags } = props.note
    this.state = {
      hasChanged: false,
      createMode: !props.note.id,
      id,
      inputBody: body || '',
      tagIDs: tagIDs || [],
      newTags: newTags || [],
    }
  }

  pickTag = id => {
    this.setState({
      hasChanged: true,
      tagIDs: [
        ...this.state.tagIDs,
        id
      ],
      hasTopic: this.getHasTopic()
    })
  }

  getNoteTags () {
    return this.state.tagIDs
      .map(id => this.props.tags.find(tag => tag.id === id))
      .concat(this.state.newTags)
  }

  getSuggestableTags () {
    const allTags = this.props.tags
    const tagIDsToExclude = this.state.tagIDs
    return allTags.filter(tag => !tagIDsToExclude.includes(tag.id))
  }

  getHasTopic () {
    return this.getNoteTags().filter(tag => tag.topic).length > 0
  }

  addNewTag = (tagName, isTopic) => {
    const newTagID = uid()

    this.setState({
      hasChanged: true,
      newTags: [
        ...this.state.newTags,
        {
          id: newTagID,
          topic: isTopic,
          name: tagName
        }
      ]
    })
  }

  submitHandler = () => {
    if (this.state.inputBody !== '') {
      this.props.onSubmit(
        this.state.id,
        this.state.inputBody,
        this.state.tagIDs,
        this.state.newTags,
      )
      this.state.createMode || this.setState({ redirect: true })
      this.state.createMode && this.setState({
        inputBody: '',
        tagIDs: [],
        newTags: []
      })
    }
  }

  allowSaving () {
    return this.state.hasChanged && this.state.inputBody !== '' ? true : false
  }

  conditionalRedirect () {
    if (this.state.redirect) {
      return <Redirect to={this.nextRoute} />
    }
  }

  render () {
    const { createMode } = this.state
    return (
      <PageWrapper>
        {this.conditionalRedirect()}
        <Navbar icons={this.navIcons} />
        <Main>
          <TagList tags={this.getNoteTags()} />
          <TagInput
            hasTopic={this.getHasTopic()}
            suggestableTags={this.getSuggestableTags()}
            appliedTags={this.getNoteTags()}
            onPick={this.pickTag}
            addNewTag={this.addNewTag}
          />
          <CodeMirror
            value={this.state.inputBody}
            options={{
              mode: 'markdown',
              lineWrapping: 'true',
            }}
            onBeforeChange={(editor, data, value) => {
              this.setState({ inputBody: value })
            }}
            onChange={(editor, data, value) => {
              this.setState({ hasChanged: true, inputBody: value })
            }}
          />
        </Main>
        <Footer>
          <Link to="/list">
            <TextButton label="List notes" />
          </Link>
          { this.state.id &&
          <Link to={'/note/' + this.state.id}>
            <TextButton label="View this note" />
          </Link> }
          <TextButton
            label={createMode ? 'Submit' : 'Save'}
            onClick={this.submitHandler}
            isActive={this.allowSaving()} />
        </Footer>
      </PageWrapper >
    )
  }
}
