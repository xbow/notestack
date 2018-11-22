import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, boolean, number } from '@storybook/addon-knobs'

import GlobalStyle from '../components/GlobalStyle'

import Edit from '../components/Edit'
import TextButton from '../components/TextButton'

storiesOf('Edit (page component)', module)
  .add('Create and Edit notes', () =>
    <Edit
      onSubmit={action('submitted')}
    />)

storiesOf('Buttons', module)
  .add('TextButton', () =>
    <TextButton
      label={text('label', 'Submit')}
      onClick={action('click')}
    />)
