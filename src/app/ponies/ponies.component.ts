import { Component } from '@angular/core';
import { PonyModel } from '../models/pony.model';
import { PonyComponent } from '../pony/pony.component';

@Component({
    selector: 'pr-ponies',
    standalone: true,
    imports: [PonyComponent],
    templateUrl: './ponies.component.html',
    styleUrl: './ponies.component.css'
})
export class PoniesComponent {
    ponies!: Array<PonyModel>;
}
