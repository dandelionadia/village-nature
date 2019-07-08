import React from 'react';
import { Composition, Only } from 'atomic-layout';
import { Menu } from '../components/Menu';
import { HomeInfo } from '../components/HomeInfo';
import { Logo } from '../atoms/Logo';

const areasMobile = `
    header
    image
    info
`

const areasTablet = `
    header myMenu
    info image
`

const HomePage = () => (
    <Composition
        areas={areasMobile}
        areasMd={areasTablet}
        padding={2}
        templateColsMd="40% auto"
        gap={2}
    >
        {({ Header, MyMenu, Info, Image }) => (
            <>
                <Header flex justifyContent="space-between">
                    <Logo />
                    <Only to="sm">burger</Only>
                </Header>
                <MyMenu>
                    <Menu />
                </MyMenu>
                <Image>
                    <img className="background__img" src="https://cdn.dribbble.com/users/1355613/screenshots/6568571/____41.jpg" alt="image"></img>
                </Image>
                <Info flex justifyContent="center">
                    <HomeInfo>"It is a long established fact that a reader will be distracted by the readable content of a page."</HomeInfo>
                </Info>
            </>
        )}
    </Composition>
)

export { HomePage }