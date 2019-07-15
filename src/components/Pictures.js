import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'

const StyledImage = styled.div`
  border: 8px solid black;
`

function Pictures({ items }) {
  return (
    <div>
      <Composition templateCols="repeat(3, 1fr)" templateColsLg="1fr">
        {items.map(item => (
          <Box as={StyledImage} padding="1rem" margin="1rem">
            <img className="background__img" src={item.img} />
          </Box>
        ))}
      </Composition>
    </div>
  )
}

export { Pictures }
