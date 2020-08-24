import React from 'react'

import Input from '../../components/dataEntry/Input'
import Heading from '../../components/general/Heading'

import { useFormContext } from "react-hook-form"

const InputField = ({ ...props }) => {
    const { register, setValue } = useFormContext()
    return (
        <Input
            {...props} 
            ref={register({ name: props.name })}
            type="text"
            onChange={e => setValue(props.name, e.target.value) }
        />
    )
}

const Text = ({
    name,
    question,
    correct_answer,
    incorrect_answers,
}) => {
    return (
        <>
            <Heading 
                size="3"
                dangerouslySetInnerHTML={{ __html: question }} 
            />
            <InputField
                name={name}
            />
        </>
    )
}

export default Text