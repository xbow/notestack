import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 40px;
`

const Textarea = styled.textarea`
  height: 100%;
  width: 100%;
  font-size: 1em;
  resize: none;
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

  /* keyDownHandler = () => {
    //  event.target.inputBody
  } */

  submitHandler = (onSubmit) => {
    if (this.state.inputBody !== '') {
      onSubmit(this.state.inputBody)
      this.setState({ inputBody: '' })
    } else {
      console.log('nothing to save')
      this.refs.textarea.focus()
    }
  }

  render () {
    const { onSubmit } = this.props

    return (
      <Wrapper className="Edit">
        <main>
          <Textarea
            autoFocus
            ref="textarea"
            value={this.state.inputBody}
            placeholder="Write a note..."
            onChange={event => this.setState({ inputBody: event.target.value })}
          />
        </main>
        <Footer>
          <span onClick={() => this.submitHandler(onSubmit)}>[Submit]</span>
        </Footer>
      </Wrapper>
    )
  }
}
