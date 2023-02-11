import { shuffle } from "lodash"


export async function getQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")

        const data = await response.json()
        return data.results.map((q) => {
            const answerList = shuffle(q.incorrect_answers.concat(q.correct_answer))

            return {
                question: q.question,
                correctAnswer: q.correct_answer,
                answerList,
                id: crypto.randomUUID(),
                userAnswer: ""
            }
        })

    } catch (error) {
        console.log(error)
    }
}
// {
//     "category": "Science & Nature",
//         "type": "multiple",
//             "difficulty": "medium",
//                 "question": "Who developed the first successful polio vaccine in the 1950s?",
//                     "correct_answer": "Jonas Salk",
//                         "incorrect_answers": [
//                             "John F. Enders",
//                             "Thomas Weller",
//                             "Frederick Robbins"
//                         ]
// }