import React from 'react'
import { useSelector } from 'react-redux'

import AnswerCard from './AnswerCard'
import { Link } from 'react-router-dom'

import "../../index.css"
import { Button } from '@mui/material'


export default function Answers() {

    const questionList = useSelector(state => state.questions.questionList)



    return (<div className='container'>
        <div className="int-header">ANSWERS</div>


        <ol>{questionList?.map(
            data =>
                <AnswerCard key={data.id} item={data} />
        )}
        </ol>


        <div>
            <h3>
                Your Score : {questionList.filter(item => item.userAnswer === item.correctAnswer).length}/10
            </h3>
        </div>

        <div className='int-btn'>
            <Button variant="contained" ><Link to={"/"} style={{ textDecoration: "none" }} >Try Again!</Link></Button>

        </div>

    </div>
    )
}
