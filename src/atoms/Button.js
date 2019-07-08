import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
    padding: 15px;
    border-radius: 30px;
    border: none;
    max-width: 200px;
`

function Button(props) {
    return (
        <StyleButton className="button">{props.children}</StyleButton>
    )
}

export { Button }