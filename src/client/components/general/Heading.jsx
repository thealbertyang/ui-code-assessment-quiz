import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.Heading = styled.h1`
    font-family: var(--heading-font-family);
    font-weight: ${props => props.weight ? props.weight : '500'}
`

const Heading = ({ size, ...props }) => {
  return (
    <Styled.Heading
      as={`h${size}`}
      {...props}
    />
  )
};

Heading.defaultProps = {
  size: 1
};

export default Heading;
