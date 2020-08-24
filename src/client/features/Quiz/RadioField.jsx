import React from 'react'

import Radio from '../../components/dataEntry/Radio'

import { useFormContext } from "react-hook-form"

const RadioField = ({ 
    name, 
    options, 
    ...props 
}) => {
    const { register, setValue } = useFormContext()

    const onChange = (e) => setValue(name, e.target.value) 

    const decorate = (options) => options.map(
        (option) => 
            ({
                name: option,
                label: option,
                value: option,
                ref: register({ name }),
                onChange,
            })
    )

    return (
        <Radio 
            {...props} 
            options={decorate(options)}
        />
    )
}

export default RadioField