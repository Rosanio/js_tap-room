import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-bar-info',
  inputs: ['keg'],
  outputs: ['onNewKegRequest', 'onSellPints'],
  template: `
  <p>Pints Remaining: {{keg.pints}} </p>
  <div class="keg-quanity" *ngIf="keg.pints >0">
    <input type="number" placeholder="Number of pints" #pintQuantity>
    <button class="btn btn-default" (click)="sellPint(pintQuantity)">Sell Pints</button>
  </div>
  <button class="btn btn-danger" (click)="newKeg()" *ngIf="keg.pints < 10">New Keg</button>
  `
})

export class KegBarInfoComponent {
  public keg: Keg;
  public onNewKegRequest: EventEmitter<Keg>;
  public onSellPints: EventEmitter<number>;
  constructor() {
    this.onNewKegRequest = new EventEmitter();
    this.onSellPints = new EventEmitter();
  }
  sellPint(userQuantity: HTMLInputElement):void {

    if(userQuantity.value.length > 0) {
      if(this.keg.pints - parseInt(userQuantity.value) < 0) {
        alert("Arg not enough pints!");
      } else {
        var money: number = 0;
        this.keg.pints -= parseInt(userQuantity.value);
        money += (this.keg.price/124 + 0.25)*parseInt(userQuantity.value)
        this.onSellPints.emit(money);
      }
    }
  }
  newKeg():void {
    this.onNewKegRequest.emit(this.keg);
    this.keg.pints = 124;
  }
}
