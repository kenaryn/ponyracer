import { Directive, OnInit, Input } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Directive({
    selector: '[pr-initDirective]',
    standalone: true
})
export class OnInitDirective implements OnInit {
    @Input({ required: true }) pony!: PonyModel;

    ngOnInit(): void {
        console.log(`Those inputs use a special lifecycle phase onInit: ${this.pony.name}`);
    }
}
