import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {ListModule} from '../list/list.module';

@NgModule({
    declarations: [HomePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
    ]
})
export class HomePageModule {
}
