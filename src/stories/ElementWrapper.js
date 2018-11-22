import React, { Component } from 'react'
import GlobalStyle from '../components/GlobalStyle'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class ElementWrapper extends Component {
  render () {
    return (
      <Wrapper className="App">
        {this.props.children}
        <GlobalStyle />
      </Wrapper >
    )
  }
}
