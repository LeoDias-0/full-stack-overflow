import { Request, Response } from 'express'

import { User } from '../types'

import * as userService from '../services/userService'

const createUser = async (req: Request, res: Response) => {

	// TODO: validation on req.body

	const user: User = req.body

	const token: string = await userService.createUser(user)

	res.status(200).send(token)
}

export {
	createUser
}