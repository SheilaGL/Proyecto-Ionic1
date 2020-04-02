import {Component} from '@angular/core';
import {User} from './components/user/models/User';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html'
})
export class HomePage {
    public readonly TITULO_LISTA: string = 'Titulo 1234';
    public userList: Array<User> = [
        {
            name: 'Sheila Guadiño',
            age: 36,
            gender: 'female'
        },
        {
            name: 'Santi Figueiras',
            age: 35,
            gender: 'male'
        }
    ];
}
