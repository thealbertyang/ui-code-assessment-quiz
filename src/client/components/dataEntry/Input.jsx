import React from 'react'

import styled from 'styled-components'

const Styled = {}

Styled.Input = styled.input`
    height: var(--input-height);
    border: 1px solid #d3d3d3;
    padding: 0 0.5rem;

    &:hover {
        border: 1px solid #a7a7a7;
    }
`

const Input = ({ 
    meta,
    ...props
}) => {
    return (
        <Styled.Input 
            role='textbox'
            type={props.type}
            {...props}
        />
    )
}

export default Input