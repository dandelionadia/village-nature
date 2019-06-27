import React from 'react';

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
                <ul className="menu__list">
                    {menu.map((item) => (
                        <li className="menu__item">{item.value}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export { Menu }
