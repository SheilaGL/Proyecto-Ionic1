import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-year',
    template: `
        <h1>{{year}}</h1>
    `
})
export class YearComponent {

    @Input() year: number;
}
