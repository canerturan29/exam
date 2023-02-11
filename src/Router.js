import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Intro from './pages/Intro';
import Questions from './pages/Questions';
import Answers from './pages/Answers';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Intro />,
    },
    {
        path: "/questions",
        element: <Questions />,
    },
    {
        path: "/answers",
        element: <Answers />
    }
]);


export default function Router() {
    return (
        <>
            <RouterProvider router={router} />

        </>
    )
}
