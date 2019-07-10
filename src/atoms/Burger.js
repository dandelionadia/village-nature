import React from 'react';
import styled from 'styled-components';
import { Box } from 'atomic-layout';

const StyleBtnLine = styled.div`
    background-color: black;
    width: 30px;
    height: 3px;
    margin: 0 0 5px 0;
`
const StyleBtnLineBlue = styled.div`
    background-color: #4DA6C0;
    width: 30px;
    height: 3px;
    margin: 0 0 5px 0;
`

function Burger() {
    return (
        <Box flex flexDirection="column" justifyContent="center" height="100%">
            <div>
                <StyleBtnLine></StyleBtnLine>
                <StyleBtnLineBlue></StyleBtnLineBlue>
                <StyleBtnLine></StyleBtnLine>
            </div>
        </Box>
    );
}

export default Burger