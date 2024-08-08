import { Component } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { UserModel } from '../models/user.model';

@Component({
    selector: 'pr-races',
    standalone: true,
    imports: [],
    templateUrl: './races.component.html',
    styleUrl: './races.component.css'
})
export class RacesComponent {
    // races: Array<RaceModel> = [{ id: 1, name: 'Lyon' }, { id: 2, name: 'London'} ];
    races: Array<RaceModel> = [];
    users: Array<UserModel> = [{ id:1, forename: 'Kena', surname: 'of Aerynth', address: { number: 14, street: 'alley of champions', zipcode: 11409, 'city': 'Ur' }}];

    refreshRaces(newRace: RaceModel): void {
        this.races.push(newRace);
    }
}
