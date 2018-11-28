import React, { Component } from 'react'
import icons from './res/icons'

export default class Icon extends Component {

  render () {
    const index = icons.findIndex(item => item.name === this.props.name)
    return index >= 0 ? icons[index].svg : ''
  }
}
