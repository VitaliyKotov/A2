import { Injectable } from '@angular/core';

import { User } from '../user/user';

@Injectable()
export class UsersService {
	users :User[];
	storage = window.localStorage;

    init() :void {
        if(window.localStorage['users'] === null) {
        	this.users = [];
        } else {
        	this.users = JSON.parse(this.storage.getItem('users'));
        }
    }

	// getUsers(): User[] {
 //        let list = JSON.parse(window.localStorage.getItem(users));
 //        return list;
	// }

	setUser(newUser: User) {
		this.users.push(newUser);
		// let usersArray = Object.keys(window.localStorage).map(function(key) { return localStorage[key] });
		// usersArray.push(newUser);
		this.storage.setItem('users', JSON.stringify(this.users));
	}
}
