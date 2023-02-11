import { createSlice } from "@reduxjs/toolkit";
import { setQuestionList } from "./questionSlice";


const initialState = {
    answerlist: setQuestionList
}
export const answerSlice = createSlice({


    name: "answers",
    initialState,
    reducers: {
        setAnswerList(state, action) {
            state.questionList = action.payload
        }
    }

})

export const { setAnswerList } = answerSlice.actions