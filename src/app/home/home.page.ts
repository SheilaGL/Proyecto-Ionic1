import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public list: Array<string> = [
        'Branko Fuenzalida',
        'Santi Figueiras',
        'Sheila Guadiño',
        'Cristina Romero'
    ];

    public title: string = 'Home';
    public readonly tituloLista: string = 'Titulo 1234';

    public name: string = 'Sheila';
    public age: number = 36;
    public gender: string = 'mujer';


    constructor() {
    }

}
