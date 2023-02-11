import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    questionList: []
}
export const questionSlice = createSlice(
    {
        name: "questions",
        initialState,
        reducers: {
            setQuestionList(state, action) {
                state.questionList = action.payload

            },
            updateUsersAnswers(state, action) {
                state.questionList.find(item => item.id === action.payload.id).userAnswer = action.payload.answer
            }

        }
    }
)

export const { setQuestionList, updateUsersAnswers } = questionSlice.actions
