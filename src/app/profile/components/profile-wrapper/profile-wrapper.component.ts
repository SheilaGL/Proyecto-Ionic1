import {Component, Input} from '@angular/core';

import {Labels} from '../../models/Labels';

@Component({
    selector: 'app-profile-wrapper',
    templateUrl: './profile-wrapper.component.html'
})
export class ProfileWrapperComponent {
    @Input() labels: Labels;
    @Input() languages: Array<string>;
    @Input() userName: string;
}
