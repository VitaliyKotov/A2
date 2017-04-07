import { Injectable } from '@angular/core';

import { User } from '../user/user';

@Injectable()
export class UsersService {


	users :User[];
	storage = window.localStorage;
  selected :User;
  selectedIndex :number;

    init() :void {
        if(window.localStorage['users'] !== null) {
        	this.users = JSON.parse(this.storage.getItem('users'));
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
        this.selected = this.users.filter((item, index) => {
            if(item.id === id) {
                this.selectedIndex = index;
                return true;
            } 
        })[0] // filter returns array and we need the first element in it
    }

    saveChanges() {
        this.saveToStorage(this.users)
    }
}
