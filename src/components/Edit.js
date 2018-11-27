import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import PageWrapper from './PageWrapper'
import Navbar from './Navbar'
import Footer from './Footer'
import TextButton from './TextButton'

const Wrapper = styled.div`
  height: 100%;
  padding: 5px;
  display: grid;
  grid-template-rows: auto 40px;
  grid-gap: 5px;
`

const Textarea = styled.textarea`
  height: 100%;
  width: 100%;
  font-size: 1em;
  resize: none;
  border: none;

  :focus {
    outline: none;
  }
`

const Left = styled.span`
  margin-right: auto;
`

export default class Edit extends Component {

  nextRoute = '/list'
  textArea = React.createRef()

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    // update this!
  }

  static defaultProps = {
    note: {
      id: null,
      inputBody: ''
    }
  }

  constructor(props) {
    super(props)
    const { id, body } = props.note

    this.state = {
      hasChanged: false,
      createMode: !props.note.id,
      id: id,
      inputBody: body
    }
  }

  submitHandler = () => {
    if (this.state.inputBody !== '') {
      this.props.onSubmit(
        this.state.id,
        this.state.inputBody,
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
        <Navbar />
        <main>
          <Textarea
            autoFocus
            ref={this.textArea}
            value={this.state.inputBody}
            placeholder="Write a note..."
            onChange={event => this.setState({ hasChanged: true, inputBody: event.target.value })}
          />
        </main>
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
