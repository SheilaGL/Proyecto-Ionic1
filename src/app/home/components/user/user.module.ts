import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {UserComponent} from './user.component';

@NgModule({
    declarations: [UserComponent],
    exports: [UserComponent],
    imports: [CommonModule, IonicModule]
})
export class UserModule {
}
