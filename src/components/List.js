import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom'

import TextButton from './TextButton'

const Wrapper = styled.div`
  height: 100vh;
  padding: 5px;
  display: grid;
  grid-template-rows: auto 40px;
  grid-gap: 12px;
`

const Main = styled.main`
  overflow-y: scroll;
`

const Card = styled.section`
  margin: 12px 0;
  border: 1px solid #ccc;
  padding: 16px 8px;
`

const IconMore = styled.span`
  display: inline-block;
  float: right;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export default class List extends Component {

  renderCards = () => {
    return this.props.getExcerpts().map(item => (
      <Card>{item.excerpt}<IconMore><Link to={`/edit/${item.id}`}>[...]</Link></IconMore></Card>
    ))
  }

  render () {
    return (
      <Wrapper>
        <Main>
          {this.renderCards()}
        </Main>
        <Footer>
          <Link to="/create">
            <TextButton label="Create" />
          </Link>
        </Footer>
      </Wrapper>

    )
  }
}
