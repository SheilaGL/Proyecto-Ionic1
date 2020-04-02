import {Component, Input} from '@angular/core';
import {DaysOffBalance} from '../calendar/DaysOffBalance';

@Component({
    selector: 'app-calendar-data',
    templateUrl: './calendar-data.component.html',
    styleUrls: ['./calendar-data.component.scss'],
})
export class CalendarDataComponent {

    @Input() daysOffBalance: DaysOffBalance;


}
