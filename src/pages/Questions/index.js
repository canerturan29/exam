import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuestionList } from '../../redux/questionSlice'
import { getQuestions } from '../../service/getQuestions'
import QuestionCard from './QuestionCard'
import { Link } from 'react-router-dom'

import "../../index.css"
import { Button, Stack } from '@mui/material'

export default function Questions() {

    const questionList = useSelector(state => state.questions.questionList)

    const dispatch = useDispatch()
    // const handleSubmit = () => { dispatch(setQuestionList()) }

    async function handleSubmit() {
        const data = await getQuestions()
        dispatch(setQuestionList(data))
    }

    return (<div className='container'>
        <div className="int-header">QUESTIONS</div>
        <ol>{questionList?.map(
            data =>
                <QuestionCard key={data.id} item={data} />
        )}
        </ol>





        <Stack spacing={2} direction="row" style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
            <Button variant="text" onClick={handleSubmit}>CHANGE QUESTIONS</Button>
            <Button variant="contained" disableElevation><Link to={"/answers"} style={{ textDecoration: "none" }} >SUBMIT</Link></Button>

        </Stack>


    </div>
    )
}
