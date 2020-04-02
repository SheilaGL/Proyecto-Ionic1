import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {CalendarDataComponent} from './calendar-data.component';

@NgModule({
    declarations: [CalendarDataComponent],
    exports: [CalendarDataComponent],
    imports: [IonicModule]
})
export class CalendarDataModule {
}
