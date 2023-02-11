import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuestionList } from '../../redux/questionSlice'
import { getQuestions } from '../../service/getQuestions'
import QuestionCard from './QuestionCard'
import { Link } from 'react-router-dom'

import "../../index.css"

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

        <button className='int-btn' onClick={handleSubmit}>CHANGE</button>
        <ol>{questionList?.map(
            data =>
                <QuestionCard key={data.id} item={data} />
        )}
        </ol>



        <div>
            <button className="int-btn"><Link to={"/answers"} >SUBMIT</Link></button>
        </div>

    </div>
    )
}
