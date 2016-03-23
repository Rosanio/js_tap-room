import {Component} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from "./keg.component";
import {NewKegComponent} from "./new-keg.component";
import {EditKegComponent} from './edit-keg.component';
import {PintsPipe} from './pints.pipe';

@Component({
  selector: 'kegs-list',
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  pipes: [PintsPipe],
  inputs: ['kegsList'],
  template: `
    <select (change)="onChange($event.target.value)" class="form-control">
      <option value="Almost Empty">Almost Empty</option>
      <option value="All Kegs" selected="selected">All Kegs</option>
    </select>
    <div *ngFor="#currentKeg of kegsList | pints:filterPint">
      <h3 [class.high]="currentKeg.price >= 20" [class.medium]="currentKeg.price < 20 && currentKeg.price > 5" [class.low]="currentKeg.price <= 5" (click)="kegClicked(currentKeg)">{{ currentKeg.name }}<span><img src="https://cdn4.iconfinder.com/data/icons/mobile-app-icons/512/beermug.png" class="beer-icons"></span></h3>
      <keg-display *ngIf="currentKeg === selectedKeg" [keg] = "currentKeg"></keg-display>
    </div>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    <edit-keg *ngIf="selectedKeg" [keg] = "selectedKeg"></edit-keg>
  `
})

export class KegsListComponent {
  public kegsList: Keg[];
  public selectedKeg: Keg;
  public filterPint: string = "All Kegs"
  constructor() {

  }
  kegClicked(clickedKeg: Keg): void {
    if(this.selectedKeg === clickedKeg) {
      this.selectedKeg = undefined;
    } else {
      this.selectedKeg = clickedKeg;
    }
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
