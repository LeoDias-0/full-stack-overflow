import { Request, Response } from 'express'

import * as questionRepository from '../repositories/questionRepository'

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

export {
	createQuestion,
	findQuestionById
}