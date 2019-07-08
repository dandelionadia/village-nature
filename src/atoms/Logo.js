import React from 'react';
import styled from 'styled-components';
import { Box } from 'atomic-layout';

const StyleImage = styled.img`
    width: 100px;
    height: 60px;
`
const StylePart = styled.span`
    font-weight: 700;
`

function Logo() {
    return (
        <Box flex alignItems="center">
            <StyleImage src="https://brightdotacademy.com/wp-content/uploads/2018/03/3.png" alt="logo" />
            <h2><StylePart>Li</StylePart>ogo</h2>
        </Box>
    )
}

export { Logo }