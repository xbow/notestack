import React, { Component } from 'react'

export const navbarLegend =
  <React.Fragment>
    <p>Navigation icons are configured as shown below:</p>
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

  ...

  <Navbar icons={navIcons} />`}
    </code>
  </React.Fragment>

export const navIcons = [
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