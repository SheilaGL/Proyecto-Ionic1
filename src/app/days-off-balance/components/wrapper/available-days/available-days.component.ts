import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-available-days',
    template: `<ion-item>
            {{availableDays}} días disponibles
        </ion-item>`
})
export class AvailableDaysComponent {
    @Input() availableDays: number;
}
