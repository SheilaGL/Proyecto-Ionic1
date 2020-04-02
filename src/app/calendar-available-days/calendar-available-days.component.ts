import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-calendar-available-days',
    template: `<ion-item>
            {{availableDays}} días disponibles
        </ion-item>`
})
export class CalendarAvailableDaysComponent {

    @Input() availableDays: number;

}
