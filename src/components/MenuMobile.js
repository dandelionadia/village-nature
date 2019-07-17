import React from 'react'
import styled from 'styled-components'
import Layout from 'atomic-layout'
import { Link } from 'react-router-dom'
import { menu } from './Menu'

const StyleMenuMobile = styled.ul`
  background-color: black;
  opacity: 0.9;
  position: absolute;
  top: 10vh;
  right: 0;
  padding: 5px;
  color: black;
  transition: transform 0.7s;
  z-index: 1;

  transform: translateX(${({ isOpen }) => (isOpen ? 0 : '100%')});

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
  text-align: center;
`

function MenuMobile({ isOpen }) {
  return (
    <StyleMenuMobile isOpen={isOpen}>
      {menu.map((item, index) => (
        <StyleLi key={index}>
          <Link className="menu__link" to={item.url}>
            {item.value}
          </Link>
        </StyleLi>
      ))}
    </StyleMenuMobile>
  )
}

export default MenuMobile
