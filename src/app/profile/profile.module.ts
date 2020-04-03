import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {ProfilePage} from './profile.page';
import {ProfilePageRoutingModule} from './profile-routing.module';
import {ProfileWrapperModule} from './components/profile-wrapper/profile-wrapper.module';

@NgModule({
    declarations: [ProfilePage],
    exports: [ProfilePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        ProfileWrapperModule
    ]
})
export class ProfilePageModule {
}
