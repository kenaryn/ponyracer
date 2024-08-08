import { Component } from '@angular/core';
import { DoNothingDirective } from "./donothing.directive";

@Component({
   selector: 'pr-test',
   standalone: true,
   imports: [DoNothingDirective],
   template: '<div class="loggable" logText="isArchived">Click me</div>',
})
export class TestComponent {}
