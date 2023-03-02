import React from 'react'

import cs from "classnames"

export default function QuestionCard({ item }) {



    return (
        <>
            <li><h3>{item.question}</h3>

                <ol >
                    {item.answerList.map(ans =>

                        <button
                            key={ans}
                            className={cs({
                                correct: item.correctAnswer === ans && ans === item.userAnswer,
                                wrong: ans !== item.correctAnswer && ans === item.userAnswer
                            })}
                        >{ans}</button>

                    )}
                </ol>
            </li>


        </>
    )
}
