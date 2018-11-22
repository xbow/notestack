import React, { Component } from 'react'
import GlobalStyle from '../components/GlobalStyle'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

export default class ElementWrapper extends Component {
  render () {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper >
    )
  }
}
