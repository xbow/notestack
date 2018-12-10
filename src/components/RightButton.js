import styled from 'styled-components'
import { breakpoint, maxWidth, overWidth } from './res/breakpoint'
import * as color from './res/colors'

export default styled.div`
  position: absolute;
  bottom: 6px;
  right: 12px;

  & svg {
    height: 32px;
    width: 32px;
    fill: ${color.background};
  }
`