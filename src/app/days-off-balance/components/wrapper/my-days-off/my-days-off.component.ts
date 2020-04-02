import {Component, Input} from '@angular/core';

import {DaysOffForm} from '../../../models/DaysOffForm';

@Component({
    selector: 'app-my-days-off',
    templateUrl: './my-days-off.component.html'
})
export class MyDaysOffComponent {
    @Input() daysOffBalance: DaysOffForm;
}
