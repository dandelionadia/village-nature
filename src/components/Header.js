import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import { Menu } from '../components/Menu'
import MenuMob from '../components/MenuMob'
import { Logo } from '../atoms/Logo'
import Burger from '../atoms/Burger'

const areasMobile = `
    logo mobileMenu
`

const areasTablet = `
    logo menu
`

const StyledHeader = styled.header`
  position: relative;
`

class Header extends React.Component {
  state = {
    isMenuOpen: false
  }

  handleMenuClick = () => {
    console.log('okay')
    const isMenuOpen = this.state.isMenuOpen
    this.setState({
      isMenuOpen: !isMenuOpen
    })
  }

  render() {
    return (
      <Composition
        as={StyledHeader}
        areas={areasMobile}
        areasMd={areasTablet}
        templateColsMd="40% 1fr"
        gap={2}
        justifyContent="space-between"
        padding={1}
      >
        {Areas => (
          <>
            <Areas.Logo as={Logo} />
            <Areas.Menu flex alignItems="center">
              <Menu />
            </Areas.Menu>
            <Areas.MobileMenu>
              <Burger onClick={this.handleMenuClick} />
              <MenuMob isOpen={this.state.isMenuOpen} />
            </Areas.MobileMenu>
          </>
        )}
      </Composition>
    )
  }
}

export { Header }
