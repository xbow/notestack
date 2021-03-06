import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.span`
  display: inline-block;
  border: 1px solid black;
  border-radius: 6px;
  margin: 0 3px;
  padding: 4px 12px;
  white-space: nowrap;
  color: black;

  &.active:hover {
    color: deeppink;
    border-color: deeppink;
  }

  &.inactive {
    color: #999;
    border-color: #999;
  }
`

export default class TextButton extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  render () {
    const { label, onClick, altLabel, isActive = true } = this.props
    return (
      <Button data-cy="TextButton" className={isActive ? 'active' : 'inactive'} onClick={isActive ? onClick : null}>
        {isActive ? label : altLabel || label}
      </Button>
    )
  }
}