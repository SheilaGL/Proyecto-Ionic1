import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {ProfileActionsComponent} from './profile-actions.component';
import {ProfileLanguageModule} from '../profile-language/profile-language.module';

@NgModule({
    declarations: [ProfileActionsComponent],
    exports: [ProfileActionsComponent],
    imports: [
        CommonModule, IonicModule, ProfileLanguageModule, RouterModule
    ]
})
export class ProfileActionsModule {
}
