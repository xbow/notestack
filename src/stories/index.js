import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, boolean, number } from '@storybook/addon-knobs'
import styled from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'
import ElementWrapper from './ElementWrapper'
import PageWrapper from './PageWrapper'
import Legend from './Legend'

import TextButton from '../components/TextButton'
import Icon from '../components/Icon'
import { IconLegend } from './IconLegend'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { navbarLegend, navIcons } from './NavbarDemo'
import Card from '../components/Card'

const lorem14 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla ante, tristique a vulputate.'

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
      <Legend>
        {IconLegend}
      </Legend>
    </ElementWrapper>)
storiesOf('Content Elements', module)
  .add('Card (for listing notes)', () =>
    <ElementWrapper>
      <Card text={text('text', lorem14)} id={text('id', '1337')}></Card>
    </ElementWrapper >)
storiesOf('Headers and Footers', module)
  .add('Navbar (Header)', () =>
    <PageWrapper>
      <Navbar icons={navIcons}></Navbar>
      <Legend>
        {navbarLegend}
      </Legend>
    </PageWrapper>)
  .add('Footer', () =>
    <PageWrapper justify="flex-end">
      <Footer>Simple footer component</Footer>
    </PageWrapper>)
