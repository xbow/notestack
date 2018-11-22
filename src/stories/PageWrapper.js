import React, { Component } from 'react'
import GlobalStyle from '../components/GlobalStyle'

export default class PageWrapper extends Component {
  render () {
    return (
      <div class="App">
        {this.props.children}
        <GlobalStyle />
      </div>
    )
  }
}
