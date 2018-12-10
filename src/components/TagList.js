import React, { Component } from 'react'
import styled from 'styled-components'
import { breakpoint, maxWidth, overWidth } from './res/breakpoint'
import * as color from './res/colors'

const TagListWrapper = styled.div`
  margin: 0 0 8px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: ${breakpoint}) {
  &&.note-page {
  flex-direction: column;
  margin: 24px 0 12px;
  }
}
`

const Topic = styled.span`
  align-self: flex-end;
  margin: 2px;
  padding: 2px 8px;
  border-radius: 3px;
  background: palevioletred;
  border: 1px solid palevioletred;
  color: ${color.white};
`

const Keyword = styled.span`
  align-self: flex-end;
  margin: 2px;
  padding: 2px 8px;
  border-radius: 3px;
  border: 1px solid ${color.lineLight}; 
  `


export default class TagList extends Component {
  render () {
    const { tags = [] } = this.props
    return (
      <TagListWrapper className={this.props.className}>
        {tags.filter(tag => tag.topic).map(tag => (
          <Topic key={tag.id}>
            {tag.name}
          </Topic>
        ))}
        {tags.filter(tag => !tag.topic).map(tag => (
          <Keyword key={tag.id}>
            {tag.name}
          </Keyword>
        ))}

      </TagListWrapper>
    )
  }
}
