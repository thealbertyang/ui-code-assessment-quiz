import React from 'react'

import Composition from '../../components/general/Composition'

import Multiple from './Multiple'
import Boolean from './Boolean'
import Text from './Text'

const Question = ({ 
    question, 
    className 
}) => {
    const render = ({ 
        question, 
        className 
    }) => {
        switch(question.type) {
            case 'multiple':
                return <Multiple
                    {...question}
                />    
            case 'boolean':
                return <Boolean
                    {...question}
                />
            case 'text':
                return <Text
                    {...question}
                />
            default:
                return null
        }
    }
    return (
        <Composition
            padding="0.5rem 0 1.5rem 0"
            children={
                render({
                    question, 
                    className
                })
            }
       />
    )
    
}

export default Question