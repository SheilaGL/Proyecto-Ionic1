import {Component} from '@angular/core';
import {DaysOffBalance} from './calendar';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html'
})
export class CalendarPage {

    public calendar: DaysOffBalance = {
        takenDays: 23,
        approvedDays: 3,
        availableDays: 11,
        openingBalance: 30,
        year: 2008
    };

}
