import React, { Component } from 'react'
import styled from 'styled-components'
import * as color from './res/colors'

const Wrapper = styled.div`
  height: 100vh;
  max-width: 360px;
  display: grid;
  grid-template-rows: 38px auto 38px;
  grid-gap: 5px;
  background-color: ${color.background};
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
