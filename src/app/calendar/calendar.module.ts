import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {CalendarPageRoutingModule} from './calendar-routing.module';
import {CalendarPage} from './calendar.page';
import {YearModule} from '../year/year.module';
import {CalendarContainerModule} from '../calendar-container/calendar-container.module';

@NgModule({
    declarations: [CalendarPage],
    exports: [CalendarPage],
    imports: [
        CalendarPageRoutingModule,
        CommonModule,
        FormsModule,
        IonicModule,
        YearModule,
        CalendarContainerModule
    ]
})
export class CalendarPageModule {
}
