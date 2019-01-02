import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ReactMarkdown from 'react-markdown'
import ConditionalLink from './ConditionalLink'
import TagList from './TagList'
import Icon from './Icon'

import * as color from './res/colors'

export const CardWrapper = styled.section`
  position: relative;
  margin: 8px 0 0;
  border-bottom: 1px solid ${color.lineLight};
  padding: 8px 8px 14px;

  >a {
    color: inherit;
    text-decoration: none;
    }

  &:hover {
    background: ${color.paleHighlight};
    border-color: ${color.active};
  }
`

const CardContent = styled.div`
  overflow: hidden;
  font-size: 0.95em;

  .Markdown {
    line-height: 1.35;
   
    h1 {
      font-size: 1.15em;
    }
    h2, h3, h4, h5 {
      font-size: 1.05em;
    }
  }
`

const CardButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`

export default class Card extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    link: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { text, tags, link, buttons } = this.props
    return (
      <CardWrapper>
        <CardButtons>
          {buttons && buttons.map(button => <span onClick={button.action}><Icon name={button.icon} /></span>)}
        </CardButtons>
        <TagList tags={tags} />
        <ConditionalLink to={link}>
          <CardContent>
            <ReactMarkdown className="Markdown" source={text} />
          </CardContent>
        </ConditionalLink>
      </CardWrapper>
    )
  }
}
