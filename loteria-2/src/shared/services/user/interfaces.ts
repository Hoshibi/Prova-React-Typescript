export interface ICreateUser {
		email: string,
		password: string,
		name: string,
}

export interface IUpdateUser {
	email: string,
	name: string,
}

export interface IToken {
	token : string,
}