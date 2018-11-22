import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.span`
  display: inline-block;
  border: 1px solid black;
  border-radius: 6px;
  padding: 4px 12px;
  white-space: nowrap;
`

export default class TextButton extends Component {
  render () {
    return (
      <Button onClick={this.props.onClick}>{this.props.label}</Button>
    )
  }
}
