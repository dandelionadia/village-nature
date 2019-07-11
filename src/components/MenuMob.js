import React from 'react'
import styled from 'styled-components'
import Layout from 'atomic-layout'
import { Link } from "react-router-dom"
import { menu } from './Menu'

const StyleMenuMob = styled.ul`
    position: absolute;
    top: 10vh;
    right: 0;
    padding: 5px;
    color: black;
    transition: transform 0.7s;

    transform: translateX(${({ isOpen }) => isOpen ? 0 : '100%'});

    @media (min-width: ${Layout.breakpoints.md.minWidth}) {
        display: none !important;
    }
`

const StyleLi = styled.li`
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    list-style: none;
`

function MenuMob({ isOpen }) {
    return (
        <StyleMenuMob isOpen={isOpen}>
            {menu.map((item, index) => (
                <StyleLi key={index}>
                    <Link className="menu__link" to={item.url}>{item.value}</Link>
                </StyleLi>
            ))}
        </StyleMenuMob>
    );
}

export default MenuMob;
