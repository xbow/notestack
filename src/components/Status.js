import styled from 'styled-components'
import * as color from './res/colors'

export default styled.aside`
  display: flex;
  align-items: flex-end;
  padding: 5px 5px;
  border-bottom: 1px solid ${color.lineLight};
  color: ${color.lightText};
  box-shadow: 0 12px 12px -12px ${color.lineLight};
`