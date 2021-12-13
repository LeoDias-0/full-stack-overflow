import connection from '../database/database'

import { User } from '../types'



const addUser = async (user: User): Promise<string> => {

	const result = await connection.query(`
		INSERT INTO users
			(name, class, token)
			VALUES
			($1, $2, $3)
			RETURNING token;
	`, [user.name, user.class, user.token])

	return result.rows[0]
}

export {
	addUser
}