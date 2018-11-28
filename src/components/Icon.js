import React, { Component } from 'react'
import icons from './res/icons'
import PropTypes from 'prop-types'


export default class Icon extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    const index = icons.findIndex(item => item.name === this.props.name)
    return index >= 0 ? icons[index].svg : ''
  }
}
