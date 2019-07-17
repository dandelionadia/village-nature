import React from 'react'
import { Composition } from 'atomic-layout'
import { HomeInfo } from '../components/HomeInfo'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bgColor};
  }
`

const areasMobile = `
    image
    info
`

const areasTablet = `
    info image
`

const HomePage = () => (
  <div>
    <GlobalStyle bgColor="#FFF6E5" />
    <Composition
      areas={areasMobile}
      areasMd={areasTablet}
      padding={2}
      templateColsMd="40% auto"
      gap={2}
    >
      {({ Info, Image }) => (
        <>
          <Image>
            <img
              className="background__img"
              src="https://cdn.dribbble.com/users/1355613/screenshots/6568571/____41.jpg"
              alt="img"
            />
          </Image>
          <Info flex justifyContent="center">
            <HomeInfo>
              "It is a long established fact that a reader will be distracted by
              the readable content of a page."
            </HomeInfo>
          </Info>
        </>
      )}
    </Composition>
  </div>
)

export { HomePage }
