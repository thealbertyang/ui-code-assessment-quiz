import React from 'react'

import Input from '../../components/dataEntry/Input'

import { useFormContext } from "react-hook-form"

const InputField = ({ 
    name,
    ...props 
}) => {
    const { register, setValue } = useFormContext()

    const onChange = (e) => setValue(name, e.target.value) 
    
    return (
        <Input
            {...props} 
            ref={register({ name })}
            type="text"
            onChange={onChange}
        />
    )
}

export default InputField