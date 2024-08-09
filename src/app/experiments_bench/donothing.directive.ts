import { Directive } from '@angular/core';

@Directive({
    selector: '<div.pr-loggable[logText]:not([notLoggable=true])',
    standalone: true
})
export class DoNothingDirective {
    constructor() {
        console.log('Do no thing directive.');
    }
}
