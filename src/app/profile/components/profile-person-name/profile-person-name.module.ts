import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {ProfilePersonNameComponent} from './profile-person-name.component';

@NgModule({
    declarations: [ProfilePersonNameComponent],
    exports: [ProfilePersonNameComponent],
    imports: [CommonModule, IonicModule]
})
export class ProfilePersonNameModule {
}
