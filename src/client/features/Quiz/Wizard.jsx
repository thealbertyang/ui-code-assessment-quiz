import React, { useState } from 'react'

import Form from './Form'
import Questions from './Questions'
import Results from './Results'
import Nav from './Nav'

import { useWizard } from 'react-wizard-primitive'

const Wizard = ({ questions, resetQuestions }) => {
    const { ...wizardProps } = useWizard()

    const [ results, setResults ] = useState({})

    return (
        <Form
            {...{ questions }}
            {...{ setResults }}
            {...wizardProps}
        >
            <Questions
                {...{ questions }}
                {...wizardProps}
            />
            <Results
                {...{ results }}
                {...{ questions }}
                {...wizardProps}
            />
            <Nav
                {...{ questions }}
                {...{ resetQuestions }}
                {...wizardProps}
            />
        </Form>
    )
}

export default Wizard