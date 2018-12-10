import React, { Component } from 'react'
import styled from 'styled-components'
import icons from './res/icons'
import PropTypes from 'prop-types'
import * as color from './res/colors'
import { breakpoint } from './res/breakpoint'

const NavItemWrapper = styled.div`  
  display: flex;
  align-items: center;
  margin: 8px;

  @media screen and (min-width: ${breakpoint}) {
    display: flex;
    align-items: center;
    margin: 8px;
    padding: 4px 12px;
    border-radius: 16px;
    background: ${color.paleHighlight};
    min-width: 180px;
  }
`

const NavItemIcon = styled.span`
  display: inline-flex;
  align-self: center;

  & > svg {
    height: 32px;
    width: 32px;

    @media screen and (min-width: ${breakpoint}) {
      height: 24px;
      width: 24px;
    }
  }
`

const NavItemLabel = styled.span`
  align-self: center;
  display: none;

  @media screen and (min-width: ${breakpoint}) {
    display: inline-flex;
    margin-left: 10px;
    margin-right: 0;
  }
`

export default class Icon extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  render () {
    const iconIndex = icons.findIndex(icon => icon.name === this.props.icon)
    console.log('NavItem', this.props)
    return <NavItemWrapper className="NavItem">
      <NavItemIcon className="NavItem-icon">{iconIndex >= 0 ? icons[iconIndex].svg : ''}</NavItemIcon>
      <NavItemLabel className="NavItem-label">{this.props.label}</NavItemLabel>
    </NavItemWrapper>
  }
}
