import React, { Component } from 'react'
import GlobalStyle from '../components/GlobalStyle'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  margin: 40px auto;

  & aside {
    margin-top: 40px;
    padding: 10px;
    border: 1px dashed #555;
  }

  & code { 
    white-space: pre-wrap;
  }
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
