import React from 'react';
import { Button } from '../atoms/Button';
import { Avatar } from '../atoms/Avatar';
import styled from 'styled-components';
import { useResponsiveProps } from 'atomic-layout'

const StyleTitle = styled.h1`
font-size: ${({ fontSize }) => fontSize}px;
`

const Title = (props) => {
    const { children, fontSize } = useResponsiveProps(props)
    return <StyleTitle fontSize={fontSize}>{children}</StyleTitle>
}


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
                <Title fontSize={45} fontSizeMd={70}>title to tilorem</Title>
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