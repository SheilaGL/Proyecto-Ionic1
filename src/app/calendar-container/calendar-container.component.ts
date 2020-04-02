import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss'],
})
export class CalendarContainerComponent {

@Input() availableDays: number;
@Input() takenDays: number;
@Input() approvedDays: number;
@Input() openingBalance: number;

}
