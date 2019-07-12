import React from 'react'
import '../style/main.scss'
import { Composition } from 'atomic-layout'
import { createGlobalStyle } from 'styled-components'
import { Box } from 'atomic-layout'
import styled from 'styled-components'
import { GiAnglerFish, GiFrog, GiSeatedMouse, GiDragonfly } from "react-icons/gi"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bgColor};
  }
`

const areasMobile = `
  image
  foo
`

const areasTablet = `
  image foo
`

const StyleTitle = styled.h3`
  margin: 0;
`

const work = [
    {
        title: 'title',
        Icon: GiAnglerFish,
        text: 'It is a long established fact that a reader will be at its layout.'
    },
    {
        title: 'title',
        Icon: GiFrog,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        title: 'title',
        Icon: GiSeatedMouse,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by'
    },
    {
        title: 'title',
        Icon: GiDragonfly,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }

]

const About = () => (
    <Composition
        areas={areasMobile}
        areasMd={areasTablet}
        templateColsMd="1fr 1fr auto"
        padding={2}
        gap={2}
    >
        {({ Image, Foo }) => (
            <>
                <GlobalStyle bgColor="#FFFFFF" />
                <Image>
                    <img className="background__img" src="https://cdn.dribbble.com/users/1355613/screenshots/6141198/fishing.jpg" alt="img" />
                </Image>
                <Foo>
                    <h3>About</h3>
                    {work.map((item) => (
                        <WorkListitem data={item} />
                    ))}
                </Foo>
            </>
        )}
    </Composition>
)

const WorkListitem = ({ data }) => (
    <Box marginBottom={2} marginTop={2}>
        <Box flex >
            <data.Icon />
            <StyleTitle>{data.title}</StyleTitle>
        </Box>
        <div>{data.text}</div>
    </Box>
)

export { About }
