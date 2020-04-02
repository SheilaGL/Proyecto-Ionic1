import {Component} from '@angular/core';

import {DaysOffForm} from './models/DaysOffForm';

@Component({
    selector: 'app-days-off-balance',
    templateUrl: './days-off-balance.page.html'
})
export class DaysoffbalancePage {
    public calendar: DaysOffForm = {
        approvedDays: 3,
        availableDays: 11,
        openingBalance: 30,
        takenDays: 23,
        year: 2008
    };
}
