import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
    selector: 'pr-pony',
    standalone: true,
    imports: [],
    templateUrl: './pony.component.html',
    styleUrl: './pony.component.css'
})
export class PonyComponent {
    @Input({ required: true }) ponyModel!: PonyModel;
    
    @Output('ponyClicked') readonly emitter = new EventEmitter<PonyModel>();
    
    clicked(): void {
        this.emitter.emit(this.ponyModel);
    }
    
    getPonyImageUrl(): string {
        return `images/pony-${this.ponyModel.color.toLowerCase()}.gif`
    }

    // @Output('ponySelected') readonly emitter = new EventEmitter<PonyModel>();

    // selectPony(): void {
    //     this.emitter.emit(this.pony);
    // }
}
