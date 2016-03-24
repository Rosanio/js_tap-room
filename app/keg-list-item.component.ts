import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from "./keg.component";
import {KegAlcoholComponent} from './keg-alcohol.component';
import {KegBarInfoComponent} from './keg-bar-info.component';

@Component({
  selector: 'keg-list-item',
  inputs: ['keg'],
  directives: [KegComponent, KegAlcoholComponent, KegBarInfoComponent],
  template: `
  <h3 class="kegListItem"
    [class.high]="keg.price >= 20"
    [class.medium]="keg.price < 20 && keg.price > 5"
    [class.low]="keg.price <= 5">
    {{ keg.name }}
    <keg-alcohol *ngIf="keg.drunkness > 2"></keg-alcohol>
    <keg-alcohol *ngIf="keg.drunkness > 4"></keg-alcohol>
    <keg-alcohol *ngIf="keg.drunkness > 6"></keg-alcohol>
    <keg-alcohol *ngIf="keg.drunkness > 8"></keg-alcohol>
    <keg-alcohol *ngIf="keg.drunkness > 10"></keg-alcohol>
  </h3>

  `
})

export class KegListItemComponent {
  public keg: Keg;
}
