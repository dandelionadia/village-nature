import React from 'react';
import styled from 'styled-components';

const StyleAvatar = styled.div`
    min-width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px 0 0; 
    overflow: hidden;
    border: 1px solid black;
`

const StyleImg = styled.img`
    min-width: 100%;
    height: 100%;
`


function Avatar() {
    return (
        <StyleAvatar>
            <StyleImg src="https://i.pinimg.com/originals/66/14/0f/66140fe854b349b6b0c05a81622cbe61.jpg" alt="avatar" />
        </StyleAvatar>
    )
}

export { Avatar }