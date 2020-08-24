import React, { useState } from 'react'

import styled from 'styled-components'

const Radio = ({ 
    className,
    label,
    ...props
}) => {
    return (
        <label 
            className={className}
        >
            <input 
                {...props}
                type='radio'
                role='radio'
            />
            <span
                dangerouslySetInnerHTML={{ __html: label }}
            />
        </label>
    )
}

const RadioGroup = ({ 
    name, 
    options, 
    ...props 
}) => {
    const [ checkedValue, setCheckedValue ] = useState(null)

    const option = {
        onChange: ({ e, optionProps }) => {
            setCheckedValue(e.target.value)
            optionProps.onChange && optionProps.onChange(e)
        },
        isChecked: (value) => checkedValue === value 
    }

    return options && options.length > 0 &&
        <Styled.RadioGroup
            role='radiogroup'
        >
            {
                options.map((optionProps, index) => (
                        <Styled.Radio
                            key={index} 
                            {...optionProps} 
                            onChange={(e) => option.onChange({ e, optionProps })}
                            checked={option.isChecked(optionProps.value)}
                        />
                    )
                )
            }
        </Styled.RadioGroup>       
}

const Styled = {}

Styled.RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
`

Styled.Radio = styled(Radio)`
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    font-weight: 400;

    &:not(:last-child) {
        margin: 0 0 0.5rem 0;
    }

    input[type=radio] {
        margin: 0 .5rem 0 0;
    }
`
export default RadioGroup