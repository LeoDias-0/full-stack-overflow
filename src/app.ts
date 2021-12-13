import express from 'express'
import cors from 'cors'

import * as questionController from './controllers/questionController'
import * as userController from './controllers/userController'

const app = express()
app.use(cors())
app.use(express.json())


app.post('/questions', questionController.createQuestion)
app.get('/questions/:id', questionController.findQuestionById)
app.post('/questions/:id', questionController.answerQuestion)
app.get('/questions', questionController.listQuestions)
app.post('/users', userController.createUser)

export default app