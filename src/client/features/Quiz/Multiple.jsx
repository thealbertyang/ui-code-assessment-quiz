import React, { useState, useEffect } from 'react'

import Heading from '../../components/general/Heading'

import RadioField from './RadioField'

const Multiple = ({
    name,
    question,
    correct_answer,
    incorrect_answers,
}) => {
    const [ answers, setAnswers ] = useState([])
    useEffect(() => {
        setAnswers([ ...incorrect_answers, correct_answer ])
    }, [])
    
    return (
        <>
            <Heading 
                size="3"
                dangerouslySetInnerHTML={{ __html: question }} 
            />
            <RadioField 
                name={name}
                options={answers} 
            />
        </> 
    )
}

export default Multiple