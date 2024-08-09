import { Component } from '@angular/core';
import { SimpleTextDirective } from './simpletext.directive';
import { OnDestroyDirective } from './ondestroy.directive';

@Component({
    selector: 'pr-simple-directive',
    standalone: true,
    imports: [SimpleTextDirective, OnDestroyDirective],
    template: `
        <div loggable logText="Priwet in russian | uppercase">Hola</div>
        <div destroyDirective>Avoid leaking memory when component is removed from the page</div>
    `
})
export class Test2Component {}
