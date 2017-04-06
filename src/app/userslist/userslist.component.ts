import { Component, OnInit } from '@angular/core';

import { UsersService } from '../service/users.service';
import { User } from '../user/user';


@Component({
  	selector: 'userslist',
  	templateUrl: './userslist.component.html',
  	providers: [UsersService],
  	styleUrls: ['app/userslist/userslist.component.css']
})

export class UserslistComponent implements OnInit {

	constructor(private usersService: UsersService) { }

	ngOnInit() :void {
        this.usersService.init();
  	}

  	trackByUsers(index: number, user: User): number { return user.id; }
}
