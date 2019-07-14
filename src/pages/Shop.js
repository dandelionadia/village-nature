import React from 'react'
import '../style/main.scss'
import { createGlobalStyle } from 'styled-components'
import { Composition } from 'atomic-layout'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bgColor};
  }
`

const areasMobile = `
  contentLeft
  image
  contentRight
`
const areasTablet = `
  contentLeft image contentRight
  / 1fr 1fr 1fr
`

function Shop() {
  return (
    <div>
      <Composition
        areas={areasMobile}
        templateMd={areasTablet}
        padding={1}
        gap={2}
      >
        {Areas => (
          <>
            <GlobalStyle bgColor="#FCF2E5" />
            <Areas.ContentLeft as="ContentLeft">left</Areas.ContentLeft>
            <Areas.Image as="Image">
              <img
                className="background__img"
                src="https://cdn.dribbble.com/users/1355613/screenshots/6557741/painter.jpg"
                alt="img"
              />
            </Areas.Image>
            <Areas.ContentRight as="ContentRight">right</Areas.ContentRight>
          </>
        )}
      </Composition>
    </div>
  )
}

export { Shop }
