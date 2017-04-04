import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  providers: [UsersService]
})

export class AddUserComponent {
    newName :string;
    newEmail :string;

    constructor(private usersService: UsersService) { }

	addNew() {
		let userInfo = {
			id: Math.floor(Math.random()*10000000),
			name: this.newName,
			email: this.newEmail
		}
        this.usersService.setUser(userInfo);
	}
}
