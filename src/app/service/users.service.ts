import { Injectable } from '@angular/core';

import { User } from '../user/user';

@Injectable()
export class UsersService {
	getUsers(): User[] {
		return JSON.parse(window.localStorage.getItem(users))
	} 

	setUser(newUser: User[]) {
		let usersArray = Object.keys(window.localStorage).map(function(key) { return localStorage[key] });
		usersArray.push(newUser);
		window.localStorage.setItem('users', JSON.stringify(usersArray));
	}
}
