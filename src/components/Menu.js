import React from 'react';
import styled from 'styled-components';

const StyleMenu = styled.ul`
    padding: 0;
    display: none; 

    @media (min-width: 768px) {
        display: block;
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
            <div className="menu">
                <StyleMenu className="menu__list">
                    {menu.map((item, index) => (
                        <li key={index} className="menu__item">
                            <a className="menu__link" href="#">{item.value}</a>
                        </li>
                    ))}
                </StyleMenu>
            </div>
        )
    }
}

export { Menu }
