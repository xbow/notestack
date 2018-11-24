import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom'
import uid from 'uid';

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

  constructor(props) {
    super(props)
    if (props.note) {
      console.log('note found')
      const { id, body } = props.note
      console.log(props.note)
      this.state = ({
        id: id,
        inputBody: body,
      })
    } else {
      console.log('no note found')
      this.state = {
        id: null,
        inputBody: '',
      }
      console.log('id created: ' + this.state.id)
    }
  }

  textArea = React.createRef()

  submitHandler = () => {
    if (this.state.inputBody !== '') {
      this.props.onSubmit(this.state.id, this.state.inputBody)
      this.setState({ inputBody: '' })
    } else {
      console.log('nothing to save')
    }
    this.textArea.current.focus()
  }

  render () {
    return (
      <Wrapper>
        <main>
          <Textarea
            autoFocus
            ref={this.textArea}
            value={this.state.inputBody}
            placeholder="Write a note..."
            onChange={event => this.setState({ inputBody: event.target.value })}
          />
        </main>
        <Footer>
          <Link to="/list">
            <TextButton label="List notes" />
          </Link>
          <TextButton label="Submit" onClick={this.submitHandler} />
        </Footer>
      </Wrapper>
    )
  }
}
