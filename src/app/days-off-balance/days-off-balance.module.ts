import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {CalendarPageRoutingModule} from './days-off-balance-routing.module';
import {DaysoffbalancePage} from './days-off-balance.page';
import {WrapperModule} from './components/wrapper/wrapper.module';
import {YearModule} from './components/year/year.module';

@NgModule({
    declarations: [DaysoffbalancePage],
    exports: [DaysoffbalancePage],
    imports: [
        CalendarPageRoutingModule,
        IonicModule,
        YearModule,
        WrapperModule,
        CommonModule
    ]
})
export class CalendarPageModule {
}
