import React from 'react'

import Button from '../../components/general/Button'

import { useFormContext } from "react-hook-form"

const SubmitButton = () => 
    <Button 
        type="submit"
    >
        Submit Quiz
    </Button>

const NextButton = ({ nextStep }) =>
    <Button 
        onClick={nextStep}
        type="button"
    >
        Next
    </Button>

const RestartButton = ({ resetQuiz }) => 
    <Button 
        type="button"
        onClick={resetQuiz}
    >
        Restart Quiz
    </Button>

const Nav = ({ questions, resetQuestions, ...wizardProps }) => {
    const { reset: resetForm } = useFormContext()

    const isLastStep = () => wizardProps.activeStepIndex + 1 === questions.length
    const isBeforeLastStep = () => wizardProps.activeStepIndex + 1 < questions.length
    const isResultsStep = () => wizardProps.activeStepIndex + 1 > questions.length

    const resetQuiz = () => {
        resetForm()
        resetQuestions()
        wizardProps.resetToStep(0) 
    }
    
    return (
        isLastStep() ?
            <SubmitButton/>
        :
            isBeforeLastStep() ?
                <NextButton 
                    {...{ nextStep: wizardProps.nextStep }}
                />
            :
                isResultsStep() ?
                    <RestartButton
                        {...{ resetQuiz }}
                    />
                :
                    null
    )
}

export default Nav