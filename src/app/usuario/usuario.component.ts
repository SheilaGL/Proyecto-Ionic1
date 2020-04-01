import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html'
})
export class UsuarioComponent {
    @Input() name: string;
    @Input() age: number;
    @Input() gender: string;
}
