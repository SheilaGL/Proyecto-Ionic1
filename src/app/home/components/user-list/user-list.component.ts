import {Component, Input} from '@angular/core';

import {User} from '../user/models/User';

@Component({
    selector: 'app-list',
    templateUrl: 'user-list.component.html'
})

export class UserListComponent {
    @Input() title: string = 'Titulo de lista no definida';
    @Input() list: Array<User> = [];
}
