import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from './vars/colors'
import OptionsIcon from './icons/options'

const Header = styled.header`
  margin: 0 5px;
  padding: 5px 0;
  // background: ${colors.headerBackground};
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 40px auto 120px;
  align-items: center;
`

const AppTitle = styled.h1`
  display: inline-block;
  font-size: 1em;
  margin: 0;
`

const NavIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 35px);
  justify-content: right;
  
  &>span {
    justify-self: center;
  }
  `


export default class Navbar extends Component {
  render () {
    return (
      <Header>
        <OptionsIcon color="red" />
        <AppTitle>Notestack</AppTitle>
        <NavIcons>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </NavIcons>
      </Header>
    )
  }
}
