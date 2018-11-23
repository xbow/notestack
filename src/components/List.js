import React, { Component } from 'react'

export default class List extends Component {
  render () {
    const { getCardsData } = this.props
    return (
      <div>
        <h1>List Component</h1>
        <p>{getCardsData()}</p>
      </div>
    )
  }
}
