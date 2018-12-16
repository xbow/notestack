import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ConditionalLink extends Component {
  render() {
    return this.props.to 
    ? <Link to={this.props.to}>{this.props.children}</Link>
    : <React.Fragment>{this.props.children}</React.Fragment>
  }
}
