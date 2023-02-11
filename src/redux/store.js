import { configureStore } from "@reduxjs/toolkit";
import { answerSlice } from "./answerSlice";
import { questionSlice } from "./questionSlice";


export const store = configureStore(
    {
        reducer: {
            questions: questionSlice.reducer,
            answers: answerSlice.reducer
        }
    }
)