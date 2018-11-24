import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: black;
`

export default class Edit extends Component {

  nextRoute = '/list'
  textArea = React.createRef()

  state = { hasChanged: false}

  constructor(props) {
    // Without super(props), 'this' returns undefined.
    // I don't understand why?
    super(props)
    if (props.note) {
      const { id, body } = props.note
      this.state = ({
        createMode: false,
        id: id,
        inputBody: body,
      })
    } else {
      this.state = {
        createMode: true,
        id: null,
        inputBody: '',
      }
    }
  }

  submitHandler = () => {
    const nextRoute = !this.state.createMode && this.nextRoute
    if (this.state.inputBody !== '') {
      this.props.onSubmit(
        this.state.id, 
        this.state.inputBody,
        nextRoute
        )
      !nextRoute && this.setState({ inputBody: '' })
    } 
    this.textArea.current.focus()
  }

  render () {
    const { createMode } = this.state
    return (
      <Wrapper>
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
          <Link to="/list">
            <TextButton label="List notes" />
          </Link>
          <TextButton 
            label={createMode ? 'Submit' : 'Save'} 
            onClick={this.submitHandler}
            isActive={this.state.hasChanged && this.state.inputBody !== '' ? true : false} />
        </Footer>
      </Wrapper>
    )
  }
}
