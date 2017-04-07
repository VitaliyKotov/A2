import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../user/user';

@Pipe({
    name: 'filterByName',
    pure: false
})

export class FilterByName implements PipeTransform {
    transform(users: User[], args: string): User[] {
        if(args) {
            return users.filter(item => item.name.indexOf(args[0]) !== -1);
        } else {
            return users;
        }
    }
}
