import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-calendar-data',
    templateUrl: './calendar-data.component.html',
    styleUrls: ['./calendar-data.component.scss'],
})
export class CalendarDataComponent {

    @Input() takenDays: number;
    @Input() approvedDays: number;
    @Input() openingBalance: number;

}
