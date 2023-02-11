import React from 'react'
import { useDispatch } from 'react-redux'

import { updateUsersAnswers } from '../../redux/questionSlice'
import cs from "classnames"

export default function QuestionCard({ item }) {

    const dispatch = useDispatch()

    const onAnswerClick = (answer) => {
        dispatch(updateUsersAnswers({ id: item.id, answer }))
    }

    return (
        <>
            <li><h3>{item.question}</h3>

                <ol style={{ listStyleType: "upper-alpha" }}>
                    {item.answerList.map(ans =>

                        <button key={ans} className={cs({ selected: ans === item.userAnswer })} onClick={() => onAnswerClick(ans)}>{ans}</button>
                    )}
                </ol>
            </li>
        </>
    )
}
