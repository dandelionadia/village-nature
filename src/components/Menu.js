import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import Layout from 'atomic-layout'

const StyleMenu = styled.ul`
    padding: 0;
    display: none;
    width: 100%;

    @media (min-width:  ${Layout.breakpoints.md.minWidth}) {
        display: flex;
        justify-content: space-around;
      }
`

export const menu = [
    {
        value: 'home',
        url: '/'
    },
    {
        value: 'about',
        url: '/about'
    },
    {
        value: 'shop',
        url: '/shop'
    },
    {
        value: 'foo',
        url: '#'
    }
]

class Menu extends React.Component {

    render() {

        return (
            <StyleMenu>
                {menu.map((item, index) => (
                    <li key={index} className="menu__item">
                        <Link to={item.url} className="menu__link">{item.value}</Link>
                    </li>
                ))}
            </StyleMenu>
        )
    }
}

export { Menu }
