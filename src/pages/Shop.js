import React from 'react';
import '../style/main.scss';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bgColor};
  }
`

function Shop() {
    return (
        <div>
            <GlobalStyle bgColor="#FCF2E5" />
            <h1>Shop</h1>
            <img src="https://cdn.dribbble.com/users/1355613/screenshots/6557741/painter.jpg" alt="img" />
        </div>
    );
}

export { Shop };
