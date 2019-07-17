import React from 'react'
import '../style/main.scss'
import styled, { createGlobalStyle } from 'styled-components'
import Layout, { Composition, Box } from 'atomic-layout'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bgColor};
  }
`

const areasMobile = `
  image
  info
`

const StyledImage = styled.img`
  margin: 0 auto;

  @media (min-width: ${Layout.breakpoints.md.minWidth}) {
    max-width: 60%;
  }

  @media (min-width: ${Layout.breakpoints.lg.minWidth}) {
    max-width: 42%;
  }
`

const StyledInfoContact = styled.h2`
  color: #100e51;
  text-align: center;
  font-weight: 600;
`

function Contact() {
  return (
    <div>
      <GlobalStyle bgColor="#FFCC70" />
      <Composition
        areas={areasMobile}
        padding={2}
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        {({ Image, Info }) => (
          <>
            <Image>
              <Box
                as={StyledImage}
                className="background__img"
                src="https://cdn.dribbble.com/users/1355613/screenshots/6501579/____9.jpg"
              />
            </Image>
            <Info>
              <Box as={StyledInfoContact}>Contact Us 🐾</Box>
            </Info>
          </>
        )}
      </Composition>
    </div>
  )
}

export { Contact }
