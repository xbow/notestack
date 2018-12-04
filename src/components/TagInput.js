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
    min-width: 180px;
    border: 1px solid ${color.active};
    margin: 0 2px;
    padding: 2px 8px;
    border-radius: 3px;
    background: inherit; 
  `

const SuggestionsWrapper = styled.div`
  position: absolute;
  min-width: 184px;
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
    topics: this.props.topics,
    searchString: '',
    suggestions: [],
  }

  getSuggestions = value => {
    const { topics } = this.state
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    return inputLength === 0 ? [] : topics.filter(item =>
      item.name.toLowerCase().slice(0, inputLength) === inputValue
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

  pickSuggestion = topicID => {
    this.props.onPick(topicID)
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
          placeholder="Enter a keyword..."
          value={this.state.searchString}
          onChange={this.onChangeHandler}
        />
        {this.state.suggestions.length > 0 ? this.renderSuggestions() : ''}
      </TagInputWrapper>
    )
  }
}
