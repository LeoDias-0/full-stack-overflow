import express from 'express'
import cors from 'cors'

import * as questionController from './controllers/questionController'

const app = express()
app.use(cors())
app.use(express.json())


app.post('/questions', questionController.createQuestion)
app.get('/questions/:id', questionController.findQuestionById)
//app.post('/questions/:id', )
app.get('/questions', questionController.listQuestions)
//app.post('/users', )

export default app