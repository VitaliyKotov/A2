import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';

import { MainNavigation }      from './navigation/navigation.component';
import { UserslistComponent }  from './userslist/userslist.component';
import { AddUserComponent }    from './addUser/add-user.component';
import { UsersService }        from './service/users.service';
import { UserDetailsComponent } from './userDetails/user-details.component';
import { FilterByName } from './pipe/filterByName.pipe';

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
            {
                path: '',
                redirectTo: '/users',
                pathMatch: 'full'
            },
            {
                path: 'details/:id',
                component: UserDetailsComponent
            }
    	])
  	],
  	declarations: [ MainNavigation, UserslistComponent, AddUserComponent, UserDetailsComponent, FilterByName ],
  	providers: [ UsersService ],
  	bootstrap: [ MainNavigation ]
})
export class AppModule { }
