import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListItemComponent } from './keg-list-item.component';
import { KegInventoryInfoComponent } from './keg-inventory-info.component';
import {KegComponent} from './keg.component';
import {NewKegComponent} from './new-keg.component';

@Component ({
  selector: 'keg-inventory-list',
  inputs: ['kegInventoryList'],
  outputs: ['onNewKegCreation'],
  directives: [KegListItemComponent, KegInventoryInfoComponent, KegComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="form-control">
    <option value="Almost Empty">Almost Empty</option>
    <option value="All Kegs" selected="selected">All Kegs</option>
  </select>
  <div *ngFor="#currentKeg of kegInventoryList">
    <keg-list-item [keg]="currentKeg.keg" (click)="kegInventoryClicked(currentKeg.keg)"></keg-list-item>
    <keg-display *ngIf="currentKeg.keg === selectedKeg" [keg] = "currentKeg.keg"></keg-display>
    <keg-inventory-info *ngIf="currentKeg.keg === selectedKeg" [keg] = "currentKeg.quantity"></keg-inventory-info>
  </div>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegInventoryListComponent {
  public kegInventoryList: Array<any>;
  public selectedKeg: Keg;
  public onNewKegCreation: EventEmitter<any>;
  constructor() {
    this.onNewKegCreation = new EventEmitter();
  }
  kegInventoryClicked(clickedKeg: Keg) {
    if(this.selectedKeg === clickedKeg) {
      this.selectedKeg = undefined;
    } else {
      this.selectedKeg = clickedKeg;
    }
  }
  createKeg(kegArray: Array<any>) {
    this.onNewKegCreation.emit(kegArray);
  }
}
