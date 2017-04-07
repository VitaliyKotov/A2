import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

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
		private usersService: UsersService,
        private _location: Location
	) { }

	ngOnInit(): void {
		this.usersService.init();
		let id = +window.location.href.slice(-7);
  		this.usersService.getUserDetails(id);
	}

    prevPage() {
        this._location.back();
    }
}
