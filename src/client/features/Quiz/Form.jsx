import React from 'react'

import { toLowerCase } from '../../utils/strings'

import { useForm, FormProvider } from "react-hook-form"

const scoreResults = ({ questions, values }) => {
    let correct = 0;
    let wrong = 0;

    questions.map((question) => {
        const fieldValue = toLowerCase(values[question.name])
        const correctAnswer = toLowerCase(question.correct_answer.toLowerCase())

        if(fieldValue === correctAnswer){
            correct++
        }
        else {
            wrong++
        }
    })

    return ({ 
        correct,
        wrong,
        answered: questions.length,
        score: (correct / questions.length) * 100
    })
}

const Form = ({ setResults, questions, children, ...wizardProps }) => {
    const { ...methods } = useForm()
    
    const onSubmit = async (values) => {
        const results = scoreResults({ questions, values })
        setResults(results)
        wizardProps.nextStep()
    }

    return (
        <FormProvider {...methods} >
            <form 
                role="form"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default Form