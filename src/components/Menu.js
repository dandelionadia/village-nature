import React from 'react';
import styled from 'styled-components';

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
                    value: 'foo'
                },
                {
                    value: 'foo'
                },
                {
                    value: 'foo'
                },
                {
                    value: 'foo'
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
                        <a className="menu__link" href="#">{item.value}</a>
                    </li>
                ))}
            </StyleMenu>
        )
    }
}

export { Menu }
