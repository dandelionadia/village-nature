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
  content
`

const areasTablet = `
  image content
`

const StyledTitle = styled.h3`
  margin: 0;
`

const StyledWorkList = styled.div`
    column-count: 1;

    @media (min-width: 992px) {
        column-count: 2;
    }
`

const StyledWorkListItem = styled.div`
    background-color: #F3FBFE;
    padding: 1rem;
    margin-bottom: 2rem;
    display: inline-block;
    break-inside: avoid;
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
        templateColsMd="1fr 1fr"
        padding={2}
        gap={2}
    >
        {({ Image, Content }) => (
            <>
                <GlobalStyle bgColor="#FFFFFF" />
                <Image>
                    <img className="background__img" src="https://cdn.dribbble.com/users/1355613/screenshots/6141198/fishing.jpg" alt="img" />
                </Image>
                <Content as={StyledWorkList}>
                    {work.map((item) => (
                        <WorkListItem data={item} />
                    ))}
                </Content>
            </>
        )}
    </Composition>
)

const WorkListItem = ({ data }) => (
    <StyledWorkListItem>
        <Box flex >
            <data.Icon />
            <StyledTitle>{data.title}</StyledTitle>
        </Box>
        <div>{data.text}</div>
    </StyledWorkListItem>
)

export { About }
