import connection from '../database/database'
import dayjs from 'dayjs'

import { CreateQuestion, Id, Question } from '../types'

const addQuestion = async (question: CreateQuestion): Promise<Id> => {

	const values: string[] = [
		question.question,
		question.student,
		question.class,
		question.tags,
		dayjs().format('YYYY-MM-DD HH:mm')
	]


	const result = await connection.query(`
		INSERT INTO questions
			(question, student, class, tags, submit_at)
			VALUES
			($1, $2, $3, $4, $5)
			RETURNING id;
	`, values)

	return result.rows[0]
}

const findById = async (id: Id): Promise<Question> => {
	const result = await connection.query(`
		SELECT * FROM questions WHERE id = $1
	`, [id.id])

	if (!result.rows[0].answered) {
		const {
			question,
			student,
			class: className,
			tags,
			answered,
			submitAt,
		} = result.rows[0]

		return {
			question,
			student,
			class: className,
			tags,
			answered,
			submitAt,
		}
	}

	return result.rows[0]
}

const listNotAnsweredQuestions = async (): Promise<Question> => {
	const result = await connection.query(`
		SELECT * FROM questions
	`)

	const questions: any = result.rows.filter(a => !a.answered).map((ques): Question => {
		const {
			question,
			student,
			class: className,
			tags,
			answered,
			submitAt,
		} = ques

		return {
			question,
			student,
			class: className,
			tags,
			answered,
			submitAt,
		}
	})

	return questions
}

export {
	addQuestion,
	findById,
	listNotAnsweredQuestions
}