import React from 'react'
import styled from 'styled-components'
import Layout, { Box } from 'atomic-layout'

const StyleMenuMob = styled.div`
    background-color: red;
    position: absolute;
    top: 10vh;
    right: 0;
    color: black;
    transition: transform 0.7s;

    transform: translateX(${({ isOpen }) => isOpen ? 0 : '100%'});

    @media (min-width: ${Layout.breakpoints.md.minWidth}) {
        display: none !important;
    }
`

function MenuMob({ isOpen }) {
    return (
        <Box as={StyleMenuMob} isOpen={isOpen}>
            <span>menu</span>
        </Box>
    );
}

export default MenuMob;
