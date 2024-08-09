import { Directive, OnDestroy } from '@angular/core';

@Directive({
    selector: '[pr-destroyDirective]',
    standalone: true
})
export class OnDestroyDirective implements OnDestroy {
    sayHi: number;

    constructor() {
        this.sayHi = window.setInterval(() => console.log('Hi!'), 3000);
    }

    ngOnDestroy(): void {
        window.clearInterval(this.sayHi);
    }
}
