import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';
import { TestComponent } from "./test.component";
import { Test2Component } from "./test2.component";

/**
 * @title Setting up a Angular dev env
 */
@Component({
   selector: 'pr-root',
   standalone: true,
   // Imports some components, pipes and directives into the component's template.
   imports: [MenuComponent, RacesComponent, PoniesComponent, TestComponent, Test2Component],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'Ponyracer';
   numberOfUsers: number = 432;
   user: { name: string} | undefined;
   isHidden: boolean = true;
   foreground: string = 'darkred';

   toggleHiddenBlock(): void {
      if (this.isHidden) {
         this.isHidden = false;
      } else {
         this.isHidden = true;
      }
   }

   fullName(): string {
      return 'Aurèle';
   }

   whenNewRace(): void {
      // add a flashy message intended for the user.
   }

   whenButtonClicked(event: Event): void
   {
      event.preventDefault();
      event.stopPropagation();
      console.log(event);
   }

   onUpPress(): void {
      console.log('You just pressed alt + arrow up.');
   }

   sayHi(): void {
      console.log('Hi via keyboard!');
   }
}
