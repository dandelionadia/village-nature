import React from 'react';
import { Menu } from '../components/Menu';

function HomePage() {
    return (
        <div className="header">
            <div className="header__logo">

            </div>
            <div className="header__menu">
                <Menu />
            </div>
        </div>
    )
}

export { HomePage }