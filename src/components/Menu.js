import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as color from './res/colors'
import NavItem from './NavItem'
import { breakpoint } from './res/breakpoint'


const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: row; 

  @media screen and (min-width: ${breakpoint}) {
    display: block;
    margin: 50px auto;
}
`

export default class Navbar extends Component {

  static propTypes = {
    navIcons: PropTypes.arrayOf(PropTypes.object)
  }

  renderNavItems () {
    const { navItems } = this.props
    console.log('NavItems', navItems)
    return navItems && navItems.map((item, index) => (
      <Link className="no-link" key={index} to={item.link}>
        <NavItem key={index} icon={item.icon} label={item.label} />
      </Link>))
  }

  render () {
    const navItems = this.props.items
    return (
      <MenuWrapper className="menu">
        {this.renderNavItems()}
      </MenuWrapper>
    )
  }
}
