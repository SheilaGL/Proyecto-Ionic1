import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {UserListModule} from './components/user-list/user-list.module';

@NgModule({
    declarations: [HomePage],
    imports: [
        IonicModule,
        UserListModule,
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
