import React from 'react';
import { Button } from '../atoms/Button';
import { Avatar } from '../atoms/Avatar';

class HomeInfo extends React.Component {
    render() {
        return (
            <div className="container-homeInfo">
                <h3>subtitle</h3>
                <h1>title to tilorem</h1>
                <div className="container-messager">
                    <Avatar />
                    <span className="message">"It is a long established fact that a reader will be distracted by the readable content of a page."</span>
                </div>
                <Button />
            </div>
        )
    }
}

export { HomeInfo }