import React from 'react';
import { Menu } from '../components/Menu';
import { HomeInfo } from '../components/HomeInfo';
import { Logo } from '../atoms/Logo';

function HomePage() {
    return (
        <div className="container-homePage">
            <div className="header">
                <Logo />
                <Menu />
            </div>
            <div className="container-infoPage">
                <HomeInfo />
                <img className="background__img" src="https://cdn.dribbble.com/users/1355613/screenshots/6568571/____41.jpg"></img>
            </div>
        </div>
    )
}

export { HomePage }