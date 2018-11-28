import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as color from './res/colors'

import PropTypes from 'prop-types'

import Icon from './Icon'

const Header = styled.header`
  margin: 0 5px;
  padding: 6px 0 3px;
  border-bottom: 1px solid ${color.lineDark};
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
  
  & * {
    display: inline-flex;
    width: 35px;
    justify-self: flex-end;
    align-self: center;
  }
`

export default class Navbar extends Component {

  static propTypes = {
    navIcons: PropTypes.arrayOf(PropTypes.object)
  }

  render () {
    return (
      <Header>
        <Icon name="options" link="options" />
        <AppTitle>Notestack</AppTitle>
        <NavIcons>
          {this.props.icons && this.props.icons.map(item => <Link to={item.link}> <Icon name={item.name} /> </Link>)}
        </NavIcons>
      </Header>
    )
  }
}
