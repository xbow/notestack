import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import TagList from './TagList'

import * as color from './res/colors'

const CardWrapper = styled.section`
  position: relative;
  margin: 8px 0 0;
  border-bottom: 1px solid ${color.lineLight};
  padding: 8px 8px 14px;

  &>a {
  color: inherit;
  text-decoration: none;
  }

    &:hover {
    background: ${color.paleHighlight};
    border-color: ${color.active};
  }

  :after {
    content: '';
    position: absolute;
    height: 12px;
    bottom: 14px;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(255,255,255, 0.8), transparent); 
  }

  :hover:after {
    background: linear-gradient(to top, ${color.paleHighlight}, transparent);
  }
`

const CardContent = styled.div`
  max-height: 132px;
  overflow: hidden;
  font-size: 0.95em;
  
  h1 {
    font-size: 1.15em;
  }
  h2, h3, h4, h5 {
    font-size: 1.05em;
  }
`

export default class Card extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  render () {

    const { text, id, tags } = this.props

    return (
      <CardWrapper>
        <Link to={'/note/' + id}>
          <TagList tags={tags} />
          <CardContent>
            <ReactMarkdown source={text} />
          </CardContent>
        </Link>
      </CardWrapper>
    )
  }
}
