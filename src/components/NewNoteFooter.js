import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const Footer = styled.footer`
  margin: 0 5px;
  padding: 5px 2px;
  border-top: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & a {
    display: inherit;
    & * {
      align-self: center;
    }
  }
`

const Placeholder = styled.span`
  color: #999;
  margin-left: 5px;

  &:hover {
    color: #999;
  }
  `


export default class NewNoteFooter extends Component {
  render () {
    return (
      <Footer>
        <Link to="/create">
          <Icon name="plus-circle" />
          <Placeholder>Add a note...</Placeholder>
        </Link>
      </Footer>
    )
  }
}



