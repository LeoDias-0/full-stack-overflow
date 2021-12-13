interface Id {
	id: number
}

interface CreateQuestion {
	question: string,
	student: string,
	class: string,
	tags: string
}

interface User {
	name: string,
	class: string,
	token?: string,
	id?: number
}

interface Question extends CreateQuestion {
	answered: boolean,
	submitAt: string,
	answeredAt?: string,
	answeredBy?: string,
	answer?: string
}

export {
	Id,
	CreateQuestion,
	Question,
	User
}