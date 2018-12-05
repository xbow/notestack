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
      name: 'list',
      link: '/list'
    },
  ]

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    topics: PropTypes.array.isRequired,
    note: PropTypes.object
  }

  static defaultProps = {
    note: {
      id: null,
      inputBody: '',
      topicIDs: [],
      newTopics: [],
    }
  }

  constructor(props) {
    super(props)
    const { id, body, topicIDs, newTopics } = props.note
    this.state = {
      hasChanged: false,
      createMode: !props.note.id,
      id,
      inputBody: body,
      topicIDs: topicIDs || [],
      newTopics: newTopics || []
    }
  }

  pickTopic = id => {
    this.setState({
      hasChanged: true,
      topicIDs: [
        ...this.state.topicIDs,
        id
      ]
    })
  }

  getNoteTopics () {
    return this.state.topicIDs
      .map(id => this.props.topics.find(topic => topic.id === id))
      .concat(this.state.newTopics)
  }

  getSuggestableTopics () {
    const allTopics = this.props.topics
    const topicsIDsToExclude = this.state.topicIDs
    return allTopics.filter(topic => !topicsIDsToExclude.includes(topic.id))
  }

  addNewTopic = topicName => {
    const newTopicID = uid()

    this.setState({
      TopicIDs: [
        ...this.state.topicIDs,
        newTopicID
      ],
      newTopics: [
        ...this.state.newTopics,
        {
          id: newTopicID,
          name: topicName
        }
      ]
    })
  }

  submitHandler = () => {
    if (this.state.inputBody !== '') {
      this.props.onSubmit(
        this.state.id,
        this.state.inputBody,
        this.state.topicIDs,
        this.state.newTopics,
      )
      this.state.createMode || this.setState({ redirect: true })
      this.state.createMode && this.setState({ inputBody: '' })
    }
    this.textArea.current.focus()
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
          <TagList topics={this.getNoteTopics()} />
          <TagInput
            suggestableTopics={this.getSuggestableTopics()}
            appliedTopics={this.getNoteTopics()}
            onPick={this.pickTopic}
            addNewTopic={this.addNewTopic}
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
            isActive={this.state.hasChanged && this.state.inputBody !== ''} />
        </Footer>
      </PageWrapper >
    )
  }
}
