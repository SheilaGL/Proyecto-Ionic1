import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {ListComponent} from './list.component';
import {UsuarioModule} from '../usuario/usuario.module';


@NgModule({
    declarations: [
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        UsuarioModule
    ]
})
export class ListModule {
}
