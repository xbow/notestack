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

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export default class List extends Component {

  renderCards = () => {
    return this.props.getCardsData().map(item => (
      <Card>{item.excerpt}<Link to={`/edit/${item.id}`}>[...]</Link></Card>
      // google react router navigate to url for onClick functionality
    ))
  }

  render () {
    const { getCardsData } = this.props
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
