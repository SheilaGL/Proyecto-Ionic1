import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {AlbumModule} from './components/album/album.module';
import {MusicPage} from './music.page';
import {MusicPageRoutingModule} from './music-routing.module';
import {RelatedArtistsModule} from './components/related-artists/related-artists.module';

@NgModule({
    declarations: [MusicPage],
    exports: [MusicPage],
    imports: [
        IonicModule,
        MusicPageRoutingModule,
        AlbumModule,
        RelatedArtistsModule
    ]
})
export class MusicPageModule {
}
