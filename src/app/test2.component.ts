import { Component } from "@angular/core";
import { SimpleTextDirective } from "./simpletext.directive";

@Component({
   selector: 'pr-simple-directive',
   standalone: true,
   imports: [SimpleTextDirective],
   template: '<div loggable logText="Priwet in russian | uppercase">Hola</div>',
})
export class Test2Component { }