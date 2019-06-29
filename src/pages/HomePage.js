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
            <div className="infoPage">
                <HomeInfo children={"It is a long established fact that a reader will be distracted by the readable content of a page."} />
                <img className="background__img" src="https://cdn.dribbble.com/users/1355613/screenshots/6568571/____41.jpg"></img>
            </div>
        </div>
    )
}

export { HomePage }