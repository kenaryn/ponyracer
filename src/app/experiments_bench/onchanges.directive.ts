import { Directive, OnChanges, SimpleChanges, Input } from '@angular/core';

@Directive({
    selector: '[pr-changeDirective]',
    standalone: true
})
export class OnChangesDirective implements OnChanges {
    @Input({ required: true }) pony!: string;

    ngOnChanges(changes: SimpleChanges): void {
        const ponyValue = changes['pony'];
        console.log(`changed value from ${ponyValue.previousValue} to ${ponyValue.currentValue}`);
        console.log(`Is this the first change? ${ponyValue.isFirstChange()}`);
    }
}
