import React from 'react';
import { Composition, Only } from 'atomic-layout';
import { Menu } from '../components/Menu';
import { Logo } from '../atoms/Logo';
import Burger from '../atoms/Burger';


const areasMobile = `
    header
`

const areasTablet = `
    header myMenu
`

const Header = () => (
    <Composition
        areas={areasMobile}
        areasMd={areasTablet}
        padding={2}
        templateColsMd="40% auto"
        gap={2}
    >
        {({ Header, MyMenu }) => (
            <>
                <Header flex justifyContent="space-between">
                    <Logo />
                    <Only to="md">
                        <Burger />
                    </Only>
                </Header>
                <MyMenu>
                    <Menu />
                </MyMenu>
            </>
        )}
    </Composition>
)

export { Header }