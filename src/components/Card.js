import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.section`
  margin: 12px 0;
  border: 1px solid #ccc;
  padding: 16px 8px;
  &:hover {
    border-color: deeppink;
  }
  &>a {
  color: inherit;
  text-decoration: none;
  }
`

const CardContent = styled.div`
  max-height: 104px;
  overflow: hidden;
  line-height: 1.5;
`

export default class Card extends Component {
  render () {

    const { text, id } = this.props

    return (
      <CardWrapper>
        <Link to={'/edit/' + id}>
          <CardContent>{text}</CardContent>
        </Link>
      </CardWrapper>
    )
  }
}
