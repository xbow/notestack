import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, boolean, number } from '@storybook/addon-knobs'
import styled from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'
import ElementWrapper from './ElementWrapper'
import PageWrapper from './PageWrapper'

import TextButton from '../components/TextButton'
import Navbar from '../components/Navbar'
import Icon from '../components/Icon'
import Footer from '../components/Footer'

const navIcons = [
  {
    name: 'search',
    link: '/search'
  },
  {
    name: 'list',
    link: '/list'
  },
  {
    name: 'tag',
    link: '/tags'
  }
]

const navIconsString = navIcons.map(item => {
  return item.toString()
})

storiesOf('Buttons and Icons', module)
  .add('TextButton', () =>
    <ElementWrapper>
      <TextButton
        label={text('label', 'Submit')}
        onClick={action('click')}
        altLabel={text('altLabel', 'Inactive')}
        isActive={boolean('isActive', true)}
      />
    </ElementWrapper>)
  .add('Icon', () =>
    <ElementWrapper>
      <Icon name={text('name', 'tag')} />
      <aside>
        <p>Pass "name" as prop to render icon with that name.</p>
        <p>Available icons: "options", "list", "search", "tag".</p>
      </aside>
    </ElementWrapper>)
storiesOf('Headers and Footers', module)
  .add('Navbar (Header)', () =>
    <PageWrapper>
      <Navbar icons={navIcons}></Navbar>
      <aside>
        <code>{`
  const navIcons = [
  {
      name: 'search',
      link: '/search'
    },
  {
      name: 'list',
      link: '/list'
    },
  {
      name: 'tag',
      link: '/tags'
    }
  ]

  <Navbar icons=navIcons />
         `}</code>
      </aside>
    </PageWrapper>)
  .add('Footer', () =>
    <PageWrapper justify="flex-end">
      <Footer>Simple footer component</Footer>
    </PageWrapper>)
