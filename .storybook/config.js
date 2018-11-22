import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalStyle from '../src/components/GlobalStyle';

addDecorator(withKnobs)

addDecorator(story => (
  <React.Fragment>
    <div id="root">
      {story()}
    </div>
    <GlobalStyle />
  </React.Fragment>)
);

function loadStories () {
  require('../src/stories');
}

configure(loadStories, module);
