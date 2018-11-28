import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  margin-top: 40px;
  padding: 10px;
  border: 1px dashed #555;

  & code { 
    white-space: pre-wrap;
  }
`

export default class Legend extends Component {
  render () {
    return (
      <Section>
        {this.props.children}
      </Section>
    )
  }
}
