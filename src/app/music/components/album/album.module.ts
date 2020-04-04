import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {AlbumComponent} from './album.component';

@NgModule({
    declarations: [AlbumComponent],
    exports: [AlbumComponent],
    imports: [IonicModule]
})
export class AlbumModule {
}
