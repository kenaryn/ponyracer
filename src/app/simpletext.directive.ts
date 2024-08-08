import { Directive } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
   selector: '[loggable]',
   standalone: true,
})
export class SimpleTextDirective {
   @Input()
   set logText(value: string) {
      console.log(value);
   }
}