import {NgModule} from '@angular/core';

import {CalendarAvailableDaysModule} from '../calendar-available-days/calendar-available-days.module';
import {CalendarContainerComponent} from './calendar-container.component';
import {CalendarDataModule} from '../calendar-data/calendar-data.module';

@NgModule({
    declarations: [CalendarContainerComponent],
    exports: [CalendarContainerComponent],
    imports: [
        CalendarAvailableDaysModule,
        CalendarDataModule
    ]
})
export class CalendarContainerModule {
}
