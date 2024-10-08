import { Component } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceComponent } from '../race/race.component';

@Component({
    selector: 'pr-races',
    standalone: true,
    imports: [RaceComponent],
    templateUrl: './races.component.html',
    styleUrl: './races.component.css'
})
export class RacesComponent {
    races: Array<RaceModel> = [
        {
            id: 12,
            name: 'Paris',
            ponies: [
                { id: 1, name: 'Gentle Pie', color: 'YELLOW' },
                { id: 2, name: 'Big Soda', color: 'ORANGE' },
                { id: 3, name: 'Gentle Bottle', color: 'PURPLE' },
                { id: 4, name: 'Superb Whiskey', color: 'GREEN' },
                { id: 5, name: 'Fast Rainbow', color: 'BLUE' }
            ],
            startInstant: '2024-08-19T07:03:00Z'
        },
        {
            id: 13,
            name: 'Tokyo',
            ponies: [
                { id: 5, name: 'Fast Rainbow', color: 'BLUE' },
                { id: 6, name: 'Gentle Castle', color: 'GREEN' },
                { id: 7, name: 'Awesome Rock', color: 'PURPLE' },
                { id: 8, name: 'Little Rainbow', color: 'YELLOW' },
                { id: 9, name: 'Great Soda', color: 'ORANGE' }
            ],
            startInstant: '2024-08-19T07:03:00Z'
        }
    ];
}
