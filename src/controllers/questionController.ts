import { Request, Response } from 'express'

import * as questionRepository from '../repositories/questionRepository'
import * as questionService from '../services/questionService'

import { Id, CreateQuestion } from '../types'


const createQuestion = async (req: Request, res: Response) => {

	// TODO: validation on req.body

	const question: CreateQuestion = req.body

	const id: Id = await questionRepository.addQuestion(question)

	res.status(200).send(id)
}

const findQuestionById = async (req: Request, res: Response) => {

	// TODO: validation on req.body

	const id = req.params as unknown as Id

	const result = await questionRepository.findById(id)

	res.status(200).send(result)
}

const listQuestions = async (req: Request, res: Response) => {

	const result = await questionRepository.listNotAnsweredQuestions()

	res.status(200).send(result)
}

const answerQuestion = async (req: Request, res: Response) => {

	const id: number = Number(req.params.id)

	const token: string = req.headers['authorization'].replace('Bearer ', '')

	if (!token) return res.sendStatus(401)

	if (!req.body.answer || req.body.answer.length === 0) return res.sendStatus(422)

	const answer = req.body.answer

	await questionService.answerQuestion(id, answer, token)

	res.sendStatus(200)
}

export {
	createQuestion,
	findQuestionById,
	listQuestions,
	answerQuestion
}