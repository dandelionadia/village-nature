import React from 'react';
import { Button } from '../atoms/Button';
import { Avatar } from '../atoms/Avatar';
import styled from 'styled-components'

const StyleTitle = styled.h1`
    font-size: 45px;
    
    @media (min-width: 768px) {
        font-size: 70px;
    }
`

const StyleMessage = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
`

class HomeInfo extends React.Component {
    render() {
        return (
            <div className="container-homeInfo">
                <h3>subtitle</h3>
                <StyleTitle>title to tilorem</StyleTitle>
                <div className="container-messager">
                    <Avatar />
                    <StyleMessage className="message">{this.props.children}</StyleMessage>
                </div>
                <Button>Button Lor</Button>
            </div>
        )
    }
}

export { HomeInfo }