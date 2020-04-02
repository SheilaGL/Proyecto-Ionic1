import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {AvailableDaysComponent} from './available-days.component';

@NgModule({
    declarations: [AvailableDaysComponent],
    exports: [AvailableDaysComponent],
    imports: [IonicModule]
})
export class AvailableDaysModule {
}
