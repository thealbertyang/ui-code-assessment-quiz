import React from 'react'

import 'normalize.css'
import './assets/styles/app.scss'

import Styled from './layouts/Main'

import { Quiz, useQuestions } from './features/Quiz'

const url = "http://localhost:4000/api/questions"

export const App = () => {
    const [ questions, resetQuestions ] = useQuestions({ url })

    return (
        <Styled.Main>
            <Quiz
                {...{ questions }}
                {...{ resetQuestions }}
            />
        </Styled.Main>
    );
}
