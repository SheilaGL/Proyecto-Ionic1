import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
        <ion-item>
            <ion-label>{{name}}</ion-label>
            <p>{{age}}</p>
            <ion-label slot="end">{{gender}}</ion-label>
        </ion-item>      `

})
export class UserComponent {
    @Input() name: string;
    @Input() age: number;
    @Input() gender: string;
}
