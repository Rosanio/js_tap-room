import {Component} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from "./keg.component";
import {NewKegComponent} from "./new-keg.component";

@Component({
  selector: 'kegs-list',
  directives: [KegComponent, NewKegComponent],
  inputs: ['kegsList'],
  template: `
    <div *ngFor="#currentKeg of kegsList">
      <h3 (click)="kegClicked(currentKeg)">{{ currentKeg.name }}</h3>
      <keg-display *ngIf="currentKeg === selectedKeg" [keg] = "currentKeg"></keg-display>
    </div>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegsListComponent {
  public kegsList: Keg[];
  public selectedKeg: Keg;
  constructor() {

  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
  }
  createKeg(kegArray: Array<any>): void {
    console.log(kegArray);
    this.kegsList.push (
      new Keg(kegArray[0], this.kegsList.length, kegArray[1], kegArray[2], kegArray[3], kegArray[4])
    );
  }
}
