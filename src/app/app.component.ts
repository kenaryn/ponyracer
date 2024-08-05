import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';

/**
 * @title Setting up a Angular dev env
 */
@Component({
   selector: 'pr-root',
   standalone: true,
   // Imports some components, pipes and directives into the component's template.
   imports: [MenuComponent, RacesComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'Ponyracer';
}
