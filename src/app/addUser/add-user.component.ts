import { Component } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html'
})

export class AddUserComponent {
	addNew() {
		let userInfo = {
			id: Math.floor(Math.random()*10000000);
			name: newName;
			email: newEmail;
		}
	}
}
