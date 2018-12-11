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
  background: purple;
  border: 1px solid purple;
  color: lavender;
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
    console.log('Taglist render', tags)
    return (

      <TagListWrapper>
        {tags.map(tag => {
          return <Topic key={tag.id}>{tag.name}</Topic>
        })}
      </TagListWrapper>
    )
  }
}
