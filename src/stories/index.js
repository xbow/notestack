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
import Icon from '../components/Icon'
import { IconLegend } from './IconLegend'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import { navbarLegend, navIcons } from './NavbarDemo'

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
        {IconLegend}
      </aside>
    </ElementWrapper>)
storiesOf('Headers and Footers', module)
  .add('Navbar (Header)', () =>
    <PageWrapper>
      <Navbar icons={navIcons}></Navbar>
      <aside>
        {navbarLegend}
      </aside>
    </PageWrapper>)
  .add('Footer', () =>
    <PageWrapper justify="flex-end">
      <Footer>Simple footer component</Footer>
    </PageWrapper>)
