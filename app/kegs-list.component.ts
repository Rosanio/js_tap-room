import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from "./keg.component";
import {EditKegComponent} from './edit-keg.component';
import {KegAlcoholComponent} from './keg-alcohol.component';
import {KegBarInfoComponent} from './keg-bar-info.component';
import {KegListItemComponent} from './keg-list-item.component';
import {PintsPipe} from './pints.pipe';

@Component({
  selector: 'kegs-list',
  directives: [KegComponent, EditKegComponent, KegAlcoholComponent, KegBarInfoComponent, KegListItemComponent],
  pipes: [PintsPipe],
  inputs: ['kegsList', 'money'],
  outputs: ['onNewKegRequestToApp', 'onSellPints'],
  template: `
    <select (change)="onChange($event.target.value)" class="form-control">
      <option value="Almost Empty">Almost Empty</option>
      <option value="All Kegs" selected="selected">All Kegs</option>
    </select>
    <div *ngFor="#currentKeg of kegsList | pints:filterPint">
      <keg-list-item [keg]="currentKeg" (click)="kegClicked(currentKeg)"></keg-list-item>
      <keg-display *ngIf="currentKeg === selectedKeg" [keg] = "currentKeg"></keg-display>
      <keg-bar-info *ngIf="currentKeg === selectedKeg" [keg]="currentKeg" (onNewKegRequest)="requestNewKeg($event)" (onSellPints)="updateMoney($event)"></keg-bar-info>
    </div>
    <edit-keg *ngIf="selectedKeg" [keg] = "selectedKeg"></edit-keg>
  `
})

export class KegsListComponent {
  public kegsList: Keg[];
  public money: number;
  public filterPint: string = "All Kegs"
  public selectedKeg: Keg;
  public onNewKegRequestToApp: EventEmitter<Keg>;
  public onSellPints: EventEmitter<number>;
  constructor() {
    this.onNewKegRequestToApp = new EventEmitter();
    this.onSellPints = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg) {
    if(this.selectedKeg === clickedKeg) {
      this.selectedKeg = undefined;
    } else {
      this.selectedKeg = clickedKeg;
      console.log(this.selectedKeg);
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
  requestNewKeg(keg: Keg) {
    console.log("it kind of works");
    this.onNewKegRequestToApp.emit(keg);
  }
  updateMoney(money: number) {
    this.onSellPints.emit(money);
  }
}
