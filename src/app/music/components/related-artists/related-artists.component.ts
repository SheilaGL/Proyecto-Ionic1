import {Component, Input} from '@angular/core';
import {MusicCard} from '../../models/MusicCard';

@Component({
    selector: 'app-related-artists',
    templateUrl: './related-artists.component.html',
    styleUrls: ['./related-artists.component.scss'],
})
export class RelatedArtistsComponent {
    @Input() relatedArtistsTitle: string;
    @Input() relatedArtistsCard: MusicCard[];
}
