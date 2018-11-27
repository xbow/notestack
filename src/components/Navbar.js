import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from './vars/colors'
import OptionsIcon from './icons/options'
import Icon from './Icon'

const Header = styled.header`
  margin: 0 5px;
  padding: 5px 0;
  // background: ${colors.headerBackground};
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 40px auto auto;
  align-items: center;
`

const AppTitle = styled.h1`
  display: inline-block;
  font-size: 1em;
  margin: 0;
`

const NavIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  &>* {
    width: 35px;
    justify-self: center;
  }
  `


export default class Navbar extends Component {
  render () {
    return (
      <Header>
        <Icon name="options" />
        <AppTitle>Notestack</AppTitle>
        <NavIcons>
          <Icon name="search" />
          <Icon name="list" />
          <Icon name="tags" />
        </NavIcons>
      </Header>
    )
  }
}
