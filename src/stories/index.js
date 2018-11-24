import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, boolean, number } from '@storybook/addon-knobs'
import styled from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'
import { PageWrapper } from '../components/PageWrapper'
import ElementWrapper from './ElementWrapper'

import Edit from '../components/Edit'
import TextButton from '../components/TextButton'

storiesOf('Buttons', module)
  .add('TextButton', () =>
    <ElementWrapper>
      <TextButton
        label={text('label', 'Submit')}
        onClick={action('click')}
      />
    </ElementWrapper>)
