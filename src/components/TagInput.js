import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import uid from 'uid';
import * as color from './res/colors'

const TagInputWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
`

const TagInputElement = styled.input`
    font-size: 1em;
    outline: none;
    width: 176px;
    border: 1px solid ${color.active};
    margin: 0 2px;
    padding: 2px 8px;
    border-radius: 3px;
    background: inherit; 
  `

const SuggestionsWrapper = styled.div`
  position: absolute;
  z-index: 3;
  width: 176px;
  background: ${color.white};
  border: 1px solid ${color.lineDark};
  margin: 0 2px;
  padding: 2px 8px;
`

const Suggestion = styled.div`
  padding: 2px 0;
`


export default class TagInput extends Component {

  inputElement = React.createRef()

  state = {
    searchString: '',
    suggestions: [],
  }

  getSuggestions = value => {
    const { suggestableTags, hasTopic } = this.props
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    return inputLength === 0 ? [] : suggestableTags
      .filter(tag => tag.topic !== hasTopic)
      .filter(item => item.name.toLowerCase().slice(0, inputLength) === inputValue
      )
  }

  renderSuggestions = () => {
    return <SuggestionsWrapper>
      {
        this.state.suggestions.map(tag => (
          <Suggestion
            key={tag.id}
            onClick={() => this.pickSuggestion(tag.id)}
          >{tag.name}</Suggestion>
        ))
      }
    </SuggestionsWrapper>
  }

  handleSubmitTag (event) {
    const tagName = event.target.value
    const alreadyApplied = this.props.appliedTags
      .find(tag => tag.name === tagName && tag.topic !== this.props.hasTopic)
    const matchingTag = this.props.suggestableTags
      .find(tag => tag.name === tagName && tag.topic !== this.props.hasTopic)

    !alreadyApplied && matchingTag && this.pickSuggestion(matchingTag.id)
    !alreadyApplied && !matchingTag && this.addNewTag(tagName, !this.props.hasTopic)
  }

  pickSuggestion = tagID => {
    this.props.onPick(tagID)
    this.resetInput()
  }

  addNewTag (tagName, isTopic) {
    this.props.addNewTag(tagName, isTopic)
    this.resetInput()
  }

  handleKeyDown = event => {
    event.key === 'Enter' && this.handleSubmitTag(event)
  }

  resetInput () {
    this.setState({
      searchString: '',
      suggestions: [],
    })
    this.inputElement.current.focus()
  }

  onChangeHandler = event => {
    const value = event.target.value
    this.setState({
      searchString: value,
      suggestions: this.getSuggestions(value)
    })
  }

  render () {
    return (
      <TagInputWrapper>
        <TagInputElement
          name="input-tag"
          ref={this.inputElement}
          placeholder={this.props.hasTopic ? 'Enter a keyword...' : 'Enter a topic...'}
          value={this.state.searchString}
          onKeyDown={this.handleKeyDown}
          onChange={this.onChangeHandler}
        />
        {this.state.suggestions.length > 0 ? this.renderSuggestions() : ''}
      </TagInputWrapper>
    )
  }
}
