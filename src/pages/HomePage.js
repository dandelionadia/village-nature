import React from 'react';
import { Menu } from '../components/Menu';

function HomePage() {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="logo" src="https://brightdotacademy.com/wp-content/uploads/2018/03/3.png"></img>
                <h2><span className="logo__text">Li</span>ogo</h2>

            </div>
            <div className="header__menu">
                <Menu />
            </div>
        </div>
    )
}

export { HomePage }