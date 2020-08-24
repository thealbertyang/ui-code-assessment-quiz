import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.Button = styled.button`
    font-family: var(--button-font-family);
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--button-height);
    background: #1d70dd;
    color: #ffffff;
    border: none;
    padding: 0 1.5rem;

    &:hover {
        opacity: 0.8;
    }
`

const Button = ({ 
    name,
    type,
    label, 
    children,
    onClick, 
    ...props
}) => {
    return (
        <Styled.Button 
            type={type}
            name={name}
            onClick={onClick} 
            {...props}
        >
            {children}
        </Styled.Button>
    )
}

export default Button