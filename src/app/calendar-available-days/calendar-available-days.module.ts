import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {CalendarAvailableDaysComponent} from './calendar-available-days.component';

@NgModule({
    declarations: [CalendarAvailableDaysComponent],
    exports: [CalendarAvailableDaysComponent],
    imports: [IonicModule]
})
export class CalendarAvailableDaysModule {
}
