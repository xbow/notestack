import React, { Component } from 'react'
import styled from 'styled-components'

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

  state = {
    inputBody: '',
    toggle: false
  }

  textArea = React.createRef()

  submitHandler = (onSubmit) => {
    if (this.state.inputBody !== '') {
      onSubmit(this.state.inputBody)
      this.setState({ inputBody: '' })
    } else {
      console.log('nothing to save')
    }
    this.textArea.current.focus()
  }

  render () {
    const { onSubmit } = this.props
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
          <TextButton label="Submit" onClick={() => this.submitHandler(onSubmit)} />
        </Footer>
      </Wrapper>
    )
  }
}
