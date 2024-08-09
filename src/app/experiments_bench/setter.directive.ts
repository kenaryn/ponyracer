import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[pr-setterDirective]',
    standalone: true
})
export class SetterDirective {
    private ponyModel!: string;

    @Input()
    set pony(newPony: string) {
        console.log(`changed to ${this.ponyModel} to ${newPony}`);
        this.ponyModel = newPony;
    }
}
