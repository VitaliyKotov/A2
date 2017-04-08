import { Injectable } from '@angular/core';

import { User } from '../user/user';

@Injectable()
export class UsersService {


	users :User[];
	storage = window.localStorage;
    selected :User;

    init() :void {
        if(this.storage['users'] !== undefined) {
        	this.users = JSON.parse(this.storage.getItem('users'));
        }
        else if(this.users === undefined) {
            this.users = [];
        }
    }

	setUser(newUser: User) {
		this.users.push(newUser);
		this.saveToStorage(this.users);
	}

	removeUser(selectedUser :User) {
  		this.users = this.users.filter(item => item.id !== selectedUser.id);
  		this.saveToStorage(this.users);
  	}

  	removeAll() {
  		this.users = [];
  		this.storage.removeItem('users');
  	}

  	saveToStorage(arr :User[]) {
  		this.storage.setItem('users', JSON.stringify(arr));
  	}

    getUserDetails(id :number) {
        this.selected = this.users.filter(item => item.id === id)[0] // filter returns array and we need the first element in it
    }

    saveChanges() {
        this.saveToStorage(this.users);
    }
}
