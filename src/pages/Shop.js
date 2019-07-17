import React from 'react'
import '../style/main.scss'
import styled, { createGlobalStyle } from 'styled-components'
import { Composition } from 'atomic-layout'
import { Pictures } from '../components/Pictures'

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
const areasLarge = `
  contentLeft image contentRight
  / 1fr 60% 1fr
`

const pictures = [
  {
    src:
      'https://cdn.dribbble.com/users/59947/screenshots/6133129/shipwreck_island_dribbble.jpg'
  },
  {
    src:
      'https://cdn.dribbble.com/users/2761/screenshots/3692195/breath-of-the-wild-merge-4.png'
  },
  {
    src: 'https://cdn.dribbble.com/users/2407/screenshots/2679126/greedo.png'
  },
  {
    src:
      'https://cdn.dribbble.com/users/1355613/screenshots/6441984/landscape.jpg'
  },
  {
    src:
      'https://cdn.dribbble.com/users/1355613/screenshots/6248741/mr._duck_in_the_rain.jpg'
  },
  {
    src:
      'https://cdn.dribbble.com/users/1355613/screenshots/6284276/attachments/1346008/customer_tags_2.png'
  }
]

function Shop() {
  const index = Math.ceil(pictures.length / 2)
  const firstHalf = pictures.slice(0, index)
  const secondHalf = pictures.slice(index)
  return (
    <div>
      <GlobalStyle bgColor="#FCF2E5" />
      <Composition
        areas={areasMobile}
        templateLg={areasLarge}
        padding={1}
        gap={2}
      >
        {Areas => (
          <>
            <Areas.ContentLeft as="ContentLeft">
              <Pictures items={firstHalf} />
            </Areas.ContentLeft>
            <Areas.Image as="Image">
              <img
                className="background__img"
                src="https://cdn.dribbble.com/users/1355613/screenshots/6557741/painter.jpg"
                alt="img"
              />
            </Areas.Image>
            <Areas.ContentRight as="ContentRight">
              <Pictures items={secondHalf} />
            </Areas.ContentRight>
          </>
        )}
      </Composition>
    </div>
  )
}

export { Shop }
