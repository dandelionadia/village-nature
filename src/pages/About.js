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

const areasDesktop = `
  image content
  / 1fr 1fr
`

const StyledTitle = styled.h3`
  margin: 0 0 0 5px;
  color: #F9744F;
`

const StyledWorkList = styled.div`
    column-count: 1;

    @media (min-width: 576px) {
        column-count: 2;
    }
`

const StyledWorkListItem = styled.div`
    background-color: #F3FBFE;
    padding: 1rem;
    margin-bottom: 1rem;
    display: inline-block;
    break-inside: avoid;
    border-radius: 4px;
`

const StyledText = styled.div`
    color: cadetblue;
`

const work = [
    {
        title: 'Fish',
        Icon: GiAnglerFish,
        text: 'It is a long established fact that a reader will be at its layout.'
    },
    {
        title: 'Frog',
        Icon: GiFrog,
        text: 'It is a long established fact that a content of a page when looking at its layout.'
    },
    {
        title: 'Mouse',
        Icon: GiSeatedMouse,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by'
    },
    {
        title: 'Dragonfly',
        Icon: GiDragonfly,
        text: 'It is a long established fact that a reader will be at its layout.'
    },
    {
        title: 'Mouse',
        Icon: GiSeatedMouse,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        title: 'Dragonfly',
        Icon: GiDragonfly,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
    {
        title: 'Fish',
        Icon: GiAnglerFish,
        text: 'It is a long established fact that a reader will be at its layout.'
    },
    {
        title: 'Frog',
        Icon: GiFrog,
        text: 'It is a long established fact that a reader will be.'
    }

]

const About = () => (
    <Composition
        areas={areasMobile}
        templateLg={areasDesktop}
        padding={2}
        gap={2}
    >
        {({ Image, Content }) => (
            <>
                <GlobalStyle bgColor="#FFFFFF" />
                <Image maxWidthMdDown="600px" justify="center">
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
        <Box flex alignItems="center" justify-content="right" marginBottom={0.5}>
            <data.Icon fill="#F9744F" />
            <StyledTitle>{data.title}</StyledTitle>
        </Box>
        <Box as={StyledText}>{data.text}</Box>
    </StyledWorkListItem>
)

export { About }
