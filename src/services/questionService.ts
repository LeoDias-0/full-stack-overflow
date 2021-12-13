
import dayjs from 'dayjs'
import * as questionRepository from '../repositories/questionRepository'

import * as userRepository from '../repositories/userRepository'

import { Id, Question } from '../types'


const answerQuestion = async (id: number, answer: string, token: string) => {

	const answeredBy = await userRepository.findUser(token)

	const question = await questionRepository.findById({ id })

	const fullQuestion: Question = {
		...question,
		answeredBy,
		answeredAt: dayjs().format('YYYY-MM-DD HH:mm'),
		answer
	}

	fullQuestion.answered = true

	await questionRepository.updateQuestion(fullQuestion, id)

}

export {
	answerQuestion
}