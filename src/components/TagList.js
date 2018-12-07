import React, { Component } from 'react'
import styled from 'styled-components'
import * as color from './res/colors'

const TagListWrapper = styled.div`
  margin: 0px 0px 8px;
  overflow-x: wrap;
`

const Topic = styled.span`
  margin: 2px;
  padding: 2px 8px;
  border-radius: 3px;
  background: ${color.activeBackground};
  border: 1px solid ${color.activeBackground};
  color: ${color.white};
`

const Keyword = styled.span`
  display: inline-block;
  margin: 2px;
  padding: 2px 8px;
  border-radius: 3px;
  border: 1px solid ${color.lineLight}; 
  `


export default class TagList extends Component {
  render () {
    const { tags = [] } = this.props
    return (
      <TagListWrapper>
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
