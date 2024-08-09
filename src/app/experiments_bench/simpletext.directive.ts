import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[pr-loggable]',
    standalone: true
})
export class SimpleTextDirective {
    @Input()
    set logText(value: string) {
        console.log(value);
    }
}
