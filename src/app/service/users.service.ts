import { Injectable } from '@angular/core';

import { User } from '../user/user';

@Injectable()
export class UsersService {
    init() :User[] {
        if(window.localStorage['users'] === null) {
        	return [];
        } else {
        	return JSON.parse(window.localStorage.getItem('users'));
        }
        
    }

	// getUsers(): User[] {
 //        let list = JSON.parse(window.localStorage.getItem(users));
 //        return list;
	// }

	setUser(newUser: User) {
		let usersArray = Object.keys(window.localStorage).map(function(key) { return localStorage[key] });
		usersArray.push(newUser);
		window.localStorage.setItem('users', JSON.stringify(usersArray));
	}
}
