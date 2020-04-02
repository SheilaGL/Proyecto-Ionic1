import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {CalendarPageRoutingModule} from './calendar-routing.module';
import {CalendarPage} from './calendar.page';
import {YearModule} from '../year/year.module';
import {CalendarContainerModule} from '../calendar-container/calendar-container.module';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [CalendarPage],
    exports: [CalendarPage],
    imports: [
        CalendarPageRoutingModule,
        IonicModule,
        YearModule,
        CalendarContainerModule,
        CommonModule
    ]
})
export class CalendarPageModule {
}
