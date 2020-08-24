import { fetchData } from '../../utils/httpRequests'
import { shuffle } from '../../utils/arrays'
import { toCamelCase, sanitizeHtml } from '../../utils/strings'

import { useState, useEffect } from 'react'

export const useQuestions = ({ url, amount = 5 }) => {
    const [questions, setQuestions] = useState([])
    
    const fetchQuestions = async () => {
        const res = await fetchData(url)
        const questions = shuffle(res.results).slice(0, amount)

        setQuestions(
            questions.map((question) => {
                return ({ ...question, name: toCamelCase(sanitizeHtml(question.question)) })
            })
        )
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    return [ 
        questions,
        fetchQuestions
    ]

}