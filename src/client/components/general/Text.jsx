import React from 'react'

import styled from 'styled-components'

const Styled = {}

Styled.Text = styled.span`
    font-family: var(--body-font-family);
    display: block;
    padding: 0 0 0.3rem;
`

const Text = ({ ...props }) => {
    return (
        <Styled.Text
            {...props}
        />
    )
}

export default Text