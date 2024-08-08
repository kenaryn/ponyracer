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
  ponies: Array<PonyModel> = [
    { id: 1, name: 'Uruk' },
    { id: 2, name: 'Ebla' },
    { id: 3, name: 'Nuzi' },
  ];
  
  refreshPonies(): void {
    this.ponies = [
      { id: 4, name: 'Awan' },
      { id: 5, name: 'Susa' },
      { id: 6, name: 'Anshan' },
    ]
  }

  betOnPony(pony: PonyModel): void {
    // TODO
  }
}
