import { User } from '../types'

import { v4 as uuid } from 'uuid'

import * as userRepositories from '../repositories/userRepository'

const createUser = async (user: User) => {
	const token: string = uuid()

	const newUser: User = { ...user, token }

	return await userRepositories.addUser(newUser)
}

export {
	createUser
}