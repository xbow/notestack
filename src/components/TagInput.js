import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import uid from 'uid';
import * as color from './res/colors'


export default class TagInput extends Component {

  inputElement = React.createRef()
  
  state = {
    tags: [
      { id: uid(), name: 'Foobar'},
      { id: uid(), name: 'Fritz'},
      { id: uid(), name: 'Barclenona'},
      { id: uid(), name: 'Badabam'},
      { id: uid(), name: 'camelCase'},
      { id: uid(), name: 'foo'},
      { id: uid(), name: 'C++'},
      { id: uid(), name: 'C#'},
    ],
    searchString: '',
    suggestions: [],
    tagList: [],
  }

  getSuggestions = value => {
    const { tags } = this.state

    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
   
    return inputLength === 0 ? [] : tags.filter(item =>
      item.name.toLowerCase().slice(0, inputLength) === inputValue
    )
  }

  renderSuggestion = tag => (
    <div onClick={() => this.pickSuggestion(tag.id)}>
      {tag.name}
    </div>
  )

  pickSuggestion = tag => {
    this.setState({
      searchString: '',
      suggestions: [],
      tagList: [
        ...this.state.tagList,
        tag
      ]
    })
    this.inputElement.current.focus()
  }

  updateSearchString = searchString => {
    this.setState({
      searchString
    })
  }

  getTagById = tagId => {
    const { tagList } = this.state
    const index = tagList.findIndex(item => item.id === tagId)
    return tagList[index]
  }

  /* componentDidUpdate() {
    this.getSuggestions(this.state.searchString)
  }*/

  onChangeHandler = event => {
    const value = event.target.value
    this.setState({
      searchString: value, 
      suggestions: this.getSuggestions(value)
    })
  }

  render() {
    return (
      <div>
        <div name="tag-list">
          {this.state.tagList.map(tag => <span key={tag.id}>{tag.name}</span>)}
        </div>
        <input
          name="input-tag"
          ref={this.inputElement}
          value={this.state.searchString} 
          onChange={this.onChangeHandler}
        />
        {this.state.suggestions.map(tag => (
          <div 
            key={tag.id}
            onClick={() => this.pickSuggestion(tag)}
          >{tag.name}</div>
          )
        )}
      </div>
    )
  }
}
