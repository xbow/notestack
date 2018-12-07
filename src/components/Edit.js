import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import uid from 'uid';

import PropTypes from 'prop-types'
import * as color from './res/colors'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import Footer from './Footer'
import TextButton from './TextButton'
import TagInput from './TagInput'
import TagList from './TagList'

const Main = styled.main`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Textarea = styled.textarea`
  height: 100%;
  width: 100%;
  font-size: 1em;
  line-height: 1.5;
  resize: none;
  border: none;
  background: ${color.background};

  :focus {
    outline: none;
  }
`

const Left = styled.span`
  margin-right: auto;
`

export default class Edit extends Component {

  textArea = React.createRef()
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
      id: id || null,
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

  getIfTopicInNoteTags () {
    return this.getNoteTags().filter(tag => tag.topic).length > 0
  }

  addNewTag = (tagName, isTopic) => {
    this.setState({
      hasChanged: true,
      newTags: [
        ...this.state.newTags,
        {
          id: uid(),
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
    this.textArea.current.focus()
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
            hasTopic={this.getIfTopicInNoteTags()}
            suggestableTags={this.getSuggestableTags()}
            appliedTags={this.getNoteTags()}
            onPick={this.pickTag}
            addNewTag={this.addNewTag}
          />
          <Textarea
            ref={this.textArea}
            value={this.state.inputBody}
            placeholder="Write a note..."
            onChange={event => this.setState({ hasChanged: true, inputBody: event.target.value })}
          />
        </Main>
        <Footer>
          <Left>
            <Link to="/list">
              <TextButton label="List notes" />
            </Link>
          </Left>
          <TextButton
            label={createMode ? 'Submit' : 'Save'}
            onClick={this.submitHandler}
            isActive={this.allowSaving()} />
        </Footer>
      </PageWrapper >
    )
  }
}
