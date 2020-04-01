import {Component, Input} from '@angular/core';
import index from '@angular/cli/lib/cli';


@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    @Input() title: string = 'Titulo de lista no definida';
    @Input() list: Array<string> = ['No hay ningún elemento en la lista'];
}

