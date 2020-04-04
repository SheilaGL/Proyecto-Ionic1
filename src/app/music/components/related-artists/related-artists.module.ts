import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {RelatedArtistsComponent} from './related-artists.component';

@NgModule({
    declarations: [RelatedArtistsComponent],
    exports: [RelatedArtistsComponent],
    imports: [CommonModule, IonicModule]
})
export class RelatedArtistsModule {
}
