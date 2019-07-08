import React from 'react';
import { Button } from '../atoms/Button';
import { Avatar } from '../atoms/Avatar';
import styled from 'styled-components';
import { useResponsiveProps, Box } from 'atomic-layout';

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
            <Box flex flexDirection="column" justifyContent="center">
                <h3>subtitle</h3>
                <Title fontSize={45} fontSizeMd={70}>title to tilorem</Title>
                <Box marginVertical={3} marginVerticalXl={5} flex flexDirection="row" alignItems="center">
                    <Avatar />
                    <StyleMessage className="message">{this.props.children}</StyleMessage>
                </Box>
                <Button>Button Lor</Button>
            </Box>
        )
    }
}

export { HomeInfo }