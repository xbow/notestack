import React, { Component } from 'react'
import icons from './icons'

export default class Icon extends Component {

  render () {
    console.log(JSON.stringify(icons))
    const index = icons.findIndex(item => item.name === this.props.name)
    return index >= 0 ? icons[index].svg : ''
  }
}
