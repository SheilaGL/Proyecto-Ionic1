import {NgModule} from '@angular/core';

import {AvailableDaysModule} from './available-days/available-days.module';
import {WrapperComponent} from './wrapper.component';
import {MyDaysOffModule} from './my-days-off/my-days-off.module';

@NgModule({
    declarations: [WrapperComponent],
    exports: [WrapperComponent],
    imports: [AvailableDaysModule, MyDaysOffModule]
})
export class WrapperModule {
}
