import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListItemComponent } from './keg-list-item.component';
import { KegInventoryInfoComponent } from './keg-inventory-info.component';
import {KegComponent} from './keg.component';

@Component ({
  selector: 'keg-inventory-list',
  inputs: ['kegInventoryList'],
  directives: [KegListItemComponent, KegInventoryInfoComponent, KegComponent],
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
  `
})

export class KegInventoryListComponent {
  public kegInventoryList: Array<any>;
  public selectedKeg: Keg;
  kegInventoryClicked(clickedKeg: Keg) {
    if(this.selectedKeg === clickedKeg) {
      this.selectedKeg = undefined;
    } else {
      this.selectedKeg = clickedKeg;
    }
  }
}
