import { Injectable } from '@angular/core';

import { User } from '../user/user';

@Injectable()
export class UsersService {
    init() {
        if(window.localStorage.users === null)
        window.localStorage.setItem('users', JSON.stringify({}));
    }

	getUsers(): User[] {
        let list = JSON.parse(window.localStorage.getItem(users));
        return list;
	}

	setUser(newUser: User[]) {
		let usersArray = Object.keys(window.localStorage).map(function(key) { return localStorage[key] });
		usersArray.push(newUser);
		window.localStorage.setItem('users', JSON.stringify(usersArray));
	}
}
