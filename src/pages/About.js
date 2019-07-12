import React from 'react';
import '../style/main.scss';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bgColor};
  }
`


function About() {
    return (
        <div>
            <GlobalStyle bgColor="#FFFFFF" />
            <h1>About</h1>
            <img src="https://cdn.dribbble.com/users/1355613/screenshots/6141198/fishing.jpg" alt="img" />
        </div>
    );
}

export { About }
