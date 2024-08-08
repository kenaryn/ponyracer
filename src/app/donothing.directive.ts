import { Directive } from "@angular/core";

@Directive({
   selector: '<div.loggable[logText]:not([notLoggable=true])',
   standalone: true
})
export class DoNothingDirective {
   constructor() {
      console.log('Do no thing directive.');
   }
}