import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';

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
    user: { name: string } | undefined;

    fullName(): string {
        return 'Aurèle';
    }
}
