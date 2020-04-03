import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-profile-languages',
    templateUrl: './profile-language.component.html',
    styleUrls: ['./profile-language.component.scss'],
})
export class ProfileLanguageComponent {
    @Input() languageLabel: string;
    @Input() languages: Array<string>;
}
