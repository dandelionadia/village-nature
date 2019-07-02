import React from 'react';
import { Composition } from 'atomic-layout'
import Layout from 'atomic-layout'
import { Menu } from '../components/Menu';
import { HomeInfo } from '../components/HomeInfo';
import { Logo } from '../atoms/Logo';
import styled from 'styled-components'

Layout.configure({
    defaultUnit: 'rem',
})

const areasMobile = `
    header
    image
    info
`

const areasTablet = `
    header header
    info image
`

const HomePage = () => (
    <Composition
        areas={areasMobile}
        areasMd={areasTablet}
        gutter={2}
        padding={2}
    >
        {({ Header, Info, Image }) => (
            <>
                <Header>
                    <Logo />
                    <Menu />
                </Header>
                <Image>
                    <img className="background__img" src="https://cdn.dribbble.com/users/1355613/screenshots/6568571/____41.jpg"></img>
                </Image>
                <Info>
                    <HomeInfo>"It is a long established fact that a reader will be distracted by the readable content of a page."</HomeInfo>
                </Info>
            </>
        )}
    </Composition>
)

export { HomePage }