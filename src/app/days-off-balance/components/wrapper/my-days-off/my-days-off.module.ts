import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {MyDaysOffComponent} from './my-days-off.component';

@NgModule({
    declarations: [MyDaysOffComponent],
    exports: [MyDaysOffComponent],
    imports: [IonicModule]
})
export class MyDaysOffModule {
}
