import React from 'react';
import styled from 'styled-components';

const StyleLogo = styled.div`
    display: flex;
    align-items: center;
`

function Logo() {
    return (
        <StyleLogo>
            <img className="logo" src="https://brightdotacademy.com/wp-content/uploads/2018/03/3.png"></img>
            <h2><span className="logo__text">Li</span>ogo</h2>
        </StyleLogo>
    )
}

export { Logo }