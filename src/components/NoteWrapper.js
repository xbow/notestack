import styled from 'styled-components'
import { breakpoint, maxWidth, overWidth } from './res/breakpoint'
import * as color from './res/colors'

export default styled.div`
  height: 100vh;
  max-width: ${maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-areas: "status"
                       "taglist"
                       "main"
                       "footer";
  grid-template-rows: 32px minmax(32px, max-content) auto 0px;
  
  @media screen and (min-width: ${breakpoint}) {
    grid-template-areas: ".    status"
                         "taglist main"
                         "footer footer";
    grid-template-rows: 32px auto 0px;
    grid-template-columns: 180px auto;
    padding: 0 24px;
    grid-gap: 5px 48px;
  }

  @media screen and (min-width: ${maxWidth}) {
    padding-right: 9vw; 
  }

  .status {
    grid-area: status;
  }

  .taglist {
    grid-area: taglist;
  }

  .main {
    grid-area: main;
    overflow-y: scroll;
  }

  .footer {
    grid-area: footer;
    position: relative;
    background: deeppink;
  }
`
