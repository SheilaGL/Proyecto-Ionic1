import {Component, Input} from '@angular/core';
import {User} from '../usuario/User';

@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html'
})

export class ListComponent {

    @Input() title: string = 'Titulo de lista no definida';
    @Input() list: Array<User> = [];
}
