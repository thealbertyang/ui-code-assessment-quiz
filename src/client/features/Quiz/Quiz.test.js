import React from 'react'

import { render, fireEvent, waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { fetchData } from '../../utils/httpRequests'

import { Quiz, useQuestions } from './index'

jest.mock('../../utils/httpRequests')

const config = {
    url: 'http://localhost:4000/api/questions',
    amount: 5
}

const fakeQuestionsData = {
    "response_code":0,
    "results":[
        {
          "category":"Entertainment: Video Games",
          "type":"multiple",
          "difficulty":"easy",
          "question":"Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?",
          "correct_answer":"Rad Mobile",
          "incorrect_answers":[
            "Sonic The Hedgehog",
            "Super Mario 64",
            "Mega Man"
          ]
        },
        {
          "category":"Science & Nature",
          "type":"boolean",
          "difficulty":"easy",
          "question":"Igneous rocks are formed by excessive heat and pressure.",
          "correct_answer":"False",
          "incorrect_answers":[
            "True"
          ]
        },
        {
          "category":"General Knowledge",
          "type":"multiple",
          "difficulty":"easy",
          "question":"Which company did Valve cooperate with in the creation of the Vive?",
          "correct_answer":"HTC",
          "incorrect_answers":[
            "Oculus",
            "Google",
            "Razer"
          ]
        },
        {
          "category":"History",
          "type":"multiple",
          "difficulty":"easy",
          "question":"The idea of Socialism was articulated and advanced by whom?",
          "correct_answer":"Karl Marx",
          "incorrect_answers":[
            "Vladimir Lenin",
            "Joseph Stalin",
            "Vladimir Putin"
          ]
        },
        {
          "category":"Animals",
          "type":"text",
          "difficulty":"medium",
          "question":"What color\/colour is a polar bear&#039;s skin?",
          "correct_answer":"Black"
        },
    ]
}

const renderQuiz = async () => {
    fetchData.mockResolvedValue(fakeQuestionsData)
    const { result, waitForNextUpdate } = renderHook(() => useQuestions({ ...config }))
    await waitForNextUpdate()
    const [ questions, resetQuestions ] = result.current

    const { getByRole } = render(<Quiz
        {...{ questions }}
        {...{ resetQuestions }}
    />)

    return { getByRole }
}

describe('Quiz', () => {
    test('loads question', async () => {
        const { getByRole } = await renderQuiz()
        
        await waitFor(() => {
            expect(getByRole('heading')).toBeInTheDocument()
            expect(getByRole('form')).toBeInTheDocument()
            expect(getByRole('button')).toBeInTheDocument()
        })
    })

    test('loads multiple choice question', async () => {
        const { getByRole } = await renderQuiz()

        const multipleIndex = fakeQuestionsData.results.findIndex((item) => item.type === 'multiple')

        let radioGroup

        //Click next until multiple is found
        for(let i = 0; i <= multipleIndex; i++) {
            if(multipleIndex === i) 
                radioGroup = getByRole('radiogroup')
            else 
                fireEvent.click(getByRole('button'))
        }

        await waitFor(() => {
            expect(radioGroup).toBeInTheDocument()
        })
    })

    test('loads boolean question', async () => {
        const { getByRole } = await renderQuiz()

        const booleanIndex = fakeQuestionsData.results.findIndex((item) => item.type === 'boolean')

        let radioGroup

        //Click next until boolean is found
        for(let i = 0; i <= booleanIndex; i++) {
            if(booleanIndex === i) 
                radioGroup = getByRole('radiogroup')
            else 
                fireEvent.click(getByRole('button'))
        }

        await waitFor(() => {
            expect(radioGroup).toBeInTheDocument()
        })
        
    })

    test('loads text question', async () => {
        const { getByRole } = await renderQuiz()

        const textboxIndex = fakeQuestionsData.results.findIndex((item) => item.type === 'text')

        let textbox

        //Click next until boolean is found
        for(let i = 0; i <= textboxIndex; i++) {
            if(textboxIndex === i) 
                textbox = getByRole('textbox')
            else 
                fireEvent.click(getByRole('button'))
        }

        await waitFor(() => {
            expect(textbox).toBeInTheDocument()
        })
    })

    test('new question when next button is clicked', async () => {
        const { getByRole } = await renderQuiz()
        
        const questionHeading = getByRole('heading')
        fireEvent.click(getByRole('button'))

        await waitFor(() => {
            expect(getByRole('heading')).not.toEqual(questionHeading)
        })

    })
    test('summary when quiz submitted', async () => {
        const { getByRole } = await renderQuiz()

        //Click next for "amount" times
        for(let i = 0; i < config.amount; i++) {
            fireEvent.click(getByRole('button'))
        }

        await waitFor(() => {
            expect(getByRole('heading')).toHaveTextContent(/Summary/i)
        })
    })

    test('new quiz when restart button is clicked', async () => {
        const { getByRole } = await renderQuiz()

        const questionHeading = getByRole('heading')

        //Click next for "amount" times
        for(let i = 0; i < config.amount; i++) {
            fireEvent.click(getByRole('button'))
        }

        //Click restart quiz
        fireEvent.click(getByRole('button'))

        await waitFor(() => {
            expect(getByRole('heading')).not.toEqual(questionHeading)
        })
    })
})
