interface Id {
	id: number
}

interface CreateQuestion {
	question: string,
	student: string,
	class: string,
	tags: string
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
	Question
}