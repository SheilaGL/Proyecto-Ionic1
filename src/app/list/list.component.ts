import {Component, Input} from '@angular/core';


@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html'
})


export class ListComponent {
    @Input() title: string = 'Titulo de lista no definida';


    list: Array<any> = [
        {
            name: 'Branko Fuenzalida'
        },
        {
            name: 'Santi Figueiras'
        },
        {
            name: 'Sheila Guadiño'
        },
        {
            name: 'Cristina Romero'
        }

    ];

}
