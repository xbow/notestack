import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
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
    }
  }

  constructor(props) {
    super(props)
    const { id, body, topicIDs } = props.note
    this.state = {
      hasChanged: false,
      createMode: !props.note.id,
      id,
      inputBody: body,
      topicIDs: topicIDs || []
    }
  }

  pickTopic = id => {
    this.setState({
      topicIDs: [
        ...this.state.topicIDs,
        id
      ]
    })
  }

  /*createTopic = topic => {
    this.setState({
      newTopics: [
        newTopic
        ...this.state.newTopics
      ]
    })
    this.pickTopic(topic.id)
  }*/

  getNoteTopics () {
    console.log('getNoteTopics: ' + this.state.topicIDs)
    console.log('from Topics: ' + JSON.stringify(this.props.topics))

    let matchingTopics = []
    this.state.topicIDs.forEach(topicID => {
      this.props.topics.forEach(topic => {
        topic.id === topicID && matchingTopics.push(topic)
      })
    })
    console.log(matchingTopics)
    return matchingTopics
  }

  getSuggestableTopics () {
    let allTopics = this.props.topics
    let topicsIDsToExclude = this.state.topicIDs
    let suggestableTopics = []
    allTopics.forEach(topic => {
      topicsIDsToExclude.includes(topic.id) || suggestableTopics.push(topic)
    })
    return suggestableTopics
  }

  submitHandler = () => {
    if (this.state.inputBody !== '') {
      this.props.onSubmit(
        this.state.id,
        this.state.inputBody,
        this.state.topicIDs
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
          {/* PASS THIS NOTE'S TOPICS TO TAGLIST*/}
          <TagList topics={this.getNoteTopics()} />
          <TagInput topics={this.getSuggestableTopics()} onPick={this.pickTopic} /*onCreate={this.createTopic}*/ />
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
