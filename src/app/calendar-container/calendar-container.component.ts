import {Component, Input} from '@angular/core';
import {DaysOffBalance} from '../calendar/DaysOffBalance';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss'],
})
export class CalendarContainerComponent {
@Input() daysOffBalance: DaysOffBalance;

}
