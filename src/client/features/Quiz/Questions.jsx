import React from 'react'

import Question from './Question'

const Questions = ({ questions, ...wizardProps }) => {
    return (
        questions.map(
            (question, index) => 
                wizardProps.getStep().isActive && 
                    <Question
                        key={index}
                        {...{ question }} 
                    />
        )
    )
}

export default Questions