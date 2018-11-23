import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.span`
  display: inline-block;
  border: 1px solid black;
  border-radius: 6px;
  margin: 0 6px;
  padding: 4px 12px;
  white-space: nowrap;
`

export default class TextButton extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render () {
    return (
      <Button data-cy="TextButton" onClick={this.props.onClick}>{this.props.label}</Button>
    )
  }
}