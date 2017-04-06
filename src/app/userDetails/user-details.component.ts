import { Component, OnInit } from '@angular/core';

import { UsersService }      from '../service/users.service';
import { User }              from '../user/user';


@Component({
  	selector: 'user-details',
  	templateUrl: './user-details.component.html',
  	providers: [UsersService],
  	styleUrls: ['app/userDetails/user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

	constructor(
		private usersService: UsersService
	) { }

	ngOnInit(): void {
		this.usersService.init();
		let id = +window.location.href.slice(-7);
  		this.usersService.getUserDetails(id);
	}
}
