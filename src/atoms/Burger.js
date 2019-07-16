import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'

const StyleBtnLine = styled.div`
  background-color: ${props => props.bgColor || 'black'};
  width: 30px;
  height: 3px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`

const StyledButton = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
`

function Burger({ onClick }) {
  return (
    <Box flex flexDirection="column" justifyContent="center" height="100%">
      <StyledButton onClick={onClick}>
        <StyleBtnLine />
        <StyleBtnLine bgColor="#4da6c0" />
        <StyleBtnLine />
      </StyledButton>
    </Box>
  )
}

export default Burger
