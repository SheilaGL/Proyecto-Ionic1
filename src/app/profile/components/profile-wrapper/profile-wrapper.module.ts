import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileActionsModule} from '../profile-actions/profile-actions.module';
import {ProfilePersonNameModule} from '../profile-person-name/profile-person-name.module';
import {ProfileWrapperComponent} from './profile-wrapper.component';

@NgModule({
    declarations: [ProfileWrapperComponent],
    exports: [ProfileWrapperComponent],
    imports: [
        CommonModule,
        ProfilePersonNameModule,
        ProfileActionsModule
    ]
})
export class ProfileWrapperModule {
}
