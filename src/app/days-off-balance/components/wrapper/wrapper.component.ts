import {Component, Input} from '@angular/core';

import {DaysOffForm} from '../../models/DaysOffForm';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
    @Input() daysOffBalance: DaysOffForm;
}
