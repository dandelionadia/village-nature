import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'

const StyleMenuMob = styled.div`
    background-color: red;
    position: absolute;
    right: 0;
    color: white;
    transition: transform 2s;

    transform: translateX(${({ isOpen }) => isOpen ? 0 : '100%'});
`

function MenuMob({ isOpen }) {
    return (
        <Box as={StyleMenuMob} isOpen={isOpen}>menu</Box>
    );
}

export default MenuMob;
