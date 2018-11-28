import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const Footer = styled.footer`
  & a:hover {
      cursor: text;
    }
`

const FooterContent = styled.div`
  margin: 0 5px;
  padding: 7px 2px 0;
  border-top: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Placeholder = styled.span`
  color: #999;
  width: 100%;
  margin-left: 5px;
`


export default class NewNoteFooter extends Component {
  render () {
    return (
      <Footer>
        <Link to="/create" >
          <FooterContent>
            <Icon name="plus-circle" />
            <Placeholder>Add a note...</Placeholder>
          </FooterContent>
        </Link>
      </Footer>
    )
  }
}



