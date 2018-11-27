import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  background-color: #eee;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header, footer {
  & a {
    text-decoration: none;
  }

  & a, a:link, a:visited {
    color: inherit;
    cursor: default;
  }

  & a:hover {
    color: deeppink;
    cursor: default;
  }
}
`
