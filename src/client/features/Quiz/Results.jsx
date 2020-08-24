import React from 'react'

import Heading from '../../components/general/Heading'
import P from '../../components/general/Paragraph'
import Text from '../../components/general/Text'

const Results = ({ results, ...wizardProps }) => {
    return (
        wizardProps.getStep().isActive && 
            <>
                <Heading
                    size="2"
                >
                    SUMMARY
                </Heading>
                <P>
                    <Text>Correct: <strong>{results.correct}</strong></Text>
                    <Text>Wrong: <strong>{results.wrong}</strong></Text>
                    <Text>Questions answered: <strong>{results.answered}</strong></Text>
                    <Text>Final Score: <strong>{results.score}%</strong></Text>
                </P>
            </>
    )
}

export default Results