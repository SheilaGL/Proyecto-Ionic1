import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {UsuarioComponent} from './usuario.component';

@NgModule({
    declarations: [UsuarioComponent],
    exports: [UsuarioComponent],
    imports: [CommonModule, IonicModule]
})
export class UsuarioModule {
}
