import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-profile-person-name',
    templateUrl: './profile-person-name.component.html',
    styleUrls: ['./profile-person-name.component.scss'],
})
export class ProfilePersonNameComponent {
    @Input() userName: string;
}
