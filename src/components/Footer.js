import React, { Component } from 'react'
import styled from 'styled-components'

const FooterElement = styled.footer`
  margin: 0 5px;
  padding: 5px 0;
  border-top: 1px solid black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`


export default class Footer extends Component {
  render () {
    return (
      <FooterElement>
        {this.props.children}
      </FooterElement>
    )
  }
}
