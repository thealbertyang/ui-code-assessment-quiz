import React from 'react'
import Wizard from './Wizard'

const Quiz = ({ questions, resetQuestions }) => {
    return (
        <Wizard
            {...{ questions }}
            {...{ resetQuestions }}
        />
    )
}

export default Quiz