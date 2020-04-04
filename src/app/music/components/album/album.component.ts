import {Component, Input} from '@angular/core';

import {MusicCard} from '../../models/MusicCard';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {
  @Input() albumCard: MusicCard;
}
