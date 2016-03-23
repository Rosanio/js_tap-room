import {Component} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from "./keg.component";
import {NewKegComponent} from "./new-keg.component";
import {PintsPipe} from './pints.pipe';

@Component({
  selector: 'kegs-list',
  directives: [KegComponent, NewKegComponent],
  pipes: [PintsPipe],
  inputs: ['kegsList'],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="Almost Empty">Almost Empty</option>
      <option value="All Kegs" selected="selected">All Kegs</option>
    </select>
    <div *ngFor="#currentKeg of kegsList | pints:filterPint">
      <h3 (click)="kegClicked(currentKeg)">{{ currentKeg.name }}</h3>
      <keg-display *ngIf="currentKeg === selectedKeg" [keg] = "currentKeg"></keg-display>
    </div>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegsListComponent {
  public kegsList: Keg[];
  public selectedKeg: Keg;
  public filterPint: string = "All Kegs"
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
  onChange(filterOption) {
    this.filterPint = filterOption;
  }
}
