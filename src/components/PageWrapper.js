import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  max-width: 360px;
  display: grid;
  grid-template-rows: 40px auto 40px;
  grid-gap: 5px;
  background-color: #fff;
  margin: 0 auto;
`

export default class PageWrapper extends Component {
  render () {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}
