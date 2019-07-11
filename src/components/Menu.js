import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const StyleMenu = styled.ul`
    padding: 0;
    display: none;
    width: 100%;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
`

class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            menu: [
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
        }
    }

    render() {
        const { menu } = this.state

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
