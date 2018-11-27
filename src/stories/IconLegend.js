import React, { Component } from 'react'
import Icon from '../components/Icon'
import icons from '../components/icons'

export const IconLegend =
  <React.Fragment>
    <p>Pass name as prop to render icon with that name.</p>
    <p>Available icons:</p>

    {icons.map(item => (
      <p><Icon name={item.name} />&nbsp;&nbsp;&nbsp; <code>{`<Icon name="${item.name}" />`}</code></p>
    ))}
  </React.Fragment>
