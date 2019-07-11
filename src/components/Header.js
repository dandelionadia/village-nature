import React from 'react';
import { Composition, Only } from 'atomic-layout';
import styled from 'styled-components'
import { Menu } from '../components/Menu';
import MenuMob from '../components/MenuMob';
import { Logo } from '../atoms/Logo';
import Burger from '../atoms/Burger';


const areasMobile = `
    header
`

const areasTablet = `
    header myMenu
`

const StyledHeader = styled.header`
    position: relative;
    overflow: hidden;
`

class Header extends React.Component {
    state = {
        isMenuOpen: false
    }

    ClickOnMenu = () => {
        console.log('okay')
        this.setState({
            isMenuOpen: true
        })
    }

    render() {
        return (
            <Composition
                areas={areasMobile}
                areasMd={areasTablet}
                templateColsMd="40% auto"
                gap={2}
            >
                {({ Header, MyMenu }) => (
                    <>
                        <Header as={StyledHeader} flex justifyContent="space-between" padding={2}>
                            <Logo />
                            <Only to="md">
                                <Burger onClick={this.ClickOnMenu} />
                            </Only>
                            <Only as={MenuMob} to="md" isOpen={this.state.isMenuOpen} />
                        </Header>
                        <MyMenu>
                            <Menu />
                        </MyMenu>
                    </>
                )}
            </Composition>
        )
    }
}

export { Header }