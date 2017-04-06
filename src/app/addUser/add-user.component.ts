import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    providers: [UsersService],
    styleUrls: ['app/addUser/add-user.component.css']
})

export class AddUserComponent implements OnInit{
    newName :string;
    newEmail :string;

    constructor(private usersService: UsersService) { }

    ngOnInit() :void {
        this.usersService.init();
    }

	addNew() {
		let userInfo = {
			id: Math.floor(Math.random()*10000000),
			name: this.newName,
			email: this.newEmail
		}
        this.usersService.setUser(userInfo);
        this.newName = "";
        this.newEmail = "";
	}
}
