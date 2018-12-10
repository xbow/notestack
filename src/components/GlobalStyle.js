import { createGlobalStyle } from 'styled-components'
import * as color from './res/colors'

export default createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  background-color: ${color.body};
  color: ${color.text};
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a.no-link {
  text-decoration: none;

  :link, :visited {
    color: inherit;
    cursor: default;
  }

  :hover {
    color: deeppink;
    cursor: default;
  }
}
`
