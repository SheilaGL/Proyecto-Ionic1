import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {UserListComponent} from './user-list.component';
import {UserModule} from '../user/user.module';

@NgModule({
    declarations: [UserListComponent],
    exports: [UserListComponent],
    imports: [CommonModule, IonicModule, UserModule]
})
export class UserListModule {
}
