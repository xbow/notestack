import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as color from './res/colors'

const CardWrapper = styled.section`
  margin: 8px 0 0;
  border-bottom: 1px solid ${color.lineLight};
  padding: 8px 8px 14px;
  &:hover {
    background-color: ${color.paleHighlight};
    border-color: ${color.active};
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

  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

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
