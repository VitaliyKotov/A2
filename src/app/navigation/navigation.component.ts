import { Component, OnInit } from '@angular/core';

import { UsersService } from '../service/users.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['app/navigation/navigation.component.css'],
  providers: [UsersService],
})
export class MainNavigation implements OnInit {
    title = 'user managment';

    constructor( private usersService: UsersService) { }

    ngOnInit() :void {
        this.usersService.init();
    }
}
