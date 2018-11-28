import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 90vh;
  max-width: 360px;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
`

export default class PageWrapper extends Component {
  render () {
    return (
      <Wrapper justify={this.props.justify || 'flex-start'}>
        {this.props.children}
      </Wrapper >
    )
  }
}
