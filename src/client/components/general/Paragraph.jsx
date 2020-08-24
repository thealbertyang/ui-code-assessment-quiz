import React from 'react'

import styled from 'styled-components'

const Styled = {}

Styled.Paragraph = styled.p`
    font-family: var(--body-font-family);
    padding: ${props => props.padding ? props.padding : 'inherit'}
`

const Paragraph = ({ ...props }) => {
    return (
        <Styled.Paragraph
            {...props}
        />
    )
}

export default Paragraph