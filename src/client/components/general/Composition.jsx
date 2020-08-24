import React from 'react'

import styled from 'styled-components'

const Styled = {}

Styled.Composition = styled.div`
    font-family: var(--body-font-family);
    padding: ${props => props.padding ? props.padding : 'inherit'}
`

const Composition = ({ ...props }) => {
    return (
        <Styled.Composition
            {...props}
        />
    )
}

export default Composition