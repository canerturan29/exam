import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setQuestionList } from '../../redux/questionSlice'
import { getQuestions } from '../../service/getQuestions'
import "../../index.css"
import { Button } from '@mui/material'
export default function Intro() {
    const dispatch = useDispatch()

    useEffect(() => {
        getQuestions().then(questionList => {
            dispatch(setQuestionList(questionList))

        })

    }, [dispatch])

    return (
        <form>
            <div className='container'>
                <div className='int-header'>
                    QUIZZICAL
                </div>

                <hr></hr>
                <div className='int-btn'>
                    <Button variant="contained" disableElevation><Link to={"/questions"} style={{ textDecoration: "none" }} >Start quiz</Link></Button>

                </div>


            </div>
        </form>
    )
}
