import {Component} from '@angular/core';

import {Profile} from './models/Profile';
import {Labels} from './models/Labels';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html'
})
export class ProfilePage {
    public userProfile: Profile = {
        name: 'Branko Fuenzalida',
        age: null,
        email: 'branko@user.com',
        gender: 'male',
        subscriber: true
    };
    public labels: Labels = {
        language: 'Idioma',
        privacyPolicy: 'Política de privacidad',
        aboutDevelopers: 'Sobre los desarrolladores',
        logout: 'Cerrar sesión'
    };
    public languages: Array<string> = [
        'Español',
        'Catalán',
        'Inglés',
        'Francés',
        'Italiano',
        'Alemán'
    ];
}
