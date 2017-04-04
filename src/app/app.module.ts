import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainNavigation }     from './navigation/navigation.component';
import { UserslistComponent } from './userslist/userslist.component';
import { AddUserComponent }   from './addUser/add-user.component';
import { UsersService }       from './service/users.service';

@NgModule({
  	imports:[
		BrowserModule,
        FormsModule,
		RouterModule.forRoot([
      		{
        		path: 'users',
        		component: UserslistComponent
      		},
      		{
        		path: 'add',
        		component: AddUserComponent
      		},

    	])
  	],
  	declarations: [ MainNavigation, UserslistComponent, AddUserComponent ],
  	providers: [ UsersService ],
  	bootstrap: [ MainNavigation ]
})
export class AppModule { }
