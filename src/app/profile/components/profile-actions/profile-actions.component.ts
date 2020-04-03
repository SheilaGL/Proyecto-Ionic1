import {Component, Input} from '@angular/core';

import {Labels} from '../../models/Labels';

@Component({
    selector: 'app-profile-actions',
    templateUrl: './profile-actions.component.html',
    styleUrls: ['./profile-actions.component.scss'],
})
export class ProfileActionsComponent {
    @Input() languages: Array<string>;
    @Input() labels: Labels;
}
