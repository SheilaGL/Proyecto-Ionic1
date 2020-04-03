import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {ProfileLanguageComponent} from './profile-language.component';
import {ProfilePage} from '../../profile.page';


@NgModule({
    declarations: [ProfileLanguageComponent],
    exports: [ProfileLanguageComponent],
    imports: [CommonModule, IonicModule]
})
export class ProfileLanguageModule {
}
