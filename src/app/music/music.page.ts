import {Component} from '@angular/core';

import {MusicCard} from './models/MusicCard';

@Component({
    selector: 'app-music',
    templateUrl: './music.page.html',
    styleUrls: ['./music.page.scss'],
})
export class MusicPage {

    public albumCardContent: MusicCard = {
        imageUrl: './assets/album1.jpg',
        singer: 'Billie Eilish',
        album: 'When We All Fall Asleep, Where Do We Go?',
        description: 'Prodigious talent delivers game-changing debut. When did you last hear a genuinely new sound?!'
    };
    public relatedArtistsTitle = 'Related Artists';

    public relatedArtistsCards: MusicCard[] = [
        {
            imageUrl: './assets/album1.jpg',
            singer: 'Billie Eilish',
            album: 'When We All Fall Asleep, Where Do We Go?',
            description: 'Prodigious talent delivers game-changing debut. When did you last hear a genuinely new sound?!'
        },
        {
            imageUrl: './assets/album2.jpg',
            singer: 'Igor',
            album: 'Tyler, The Creator',
            description: 'On 18 May 2019, music fans in the UK took a look at Twitter and promptly lost their shit.' +
                'It was Tyler the Creator, in a pink and red suit stood in front of Buckingham Palace.'
        },
        {
            imageUrl: './assets/album3.jpg',
            singer: 'Lana Del Rey',
            album: 'Norman Fucking Rockwell',
            description: 'A lush tapestry of swoonsome sounds and killer wit from America’s most underrated songwriter'
        },
        {
            imageUrl: './assets/album4.jpg',
            singer: 'Slowthai',
            album: 'Nothing Great About Britain',
            description: 'The irresistible lovechild of punk, grime and austerity Britain'
        },
        {
            imageUrl: './assets/album5.jpg',
            singer: 'Little Simz',
            album: 'Grey Area',
            description: 'The UK’s most overlooked rapper dares you not to stare this time'
        }
    ];
}
