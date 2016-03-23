import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <p>Brand: {{keg.brand}} </p>
    <p>Price: \${{keg.price}} </p>
    <p>Alcohol Content: {{keg.drunkness}}% </p>
    <p>Type of Beer: {{keg.type}} </p>
    <p>Pints Remaining: {{keg.pints}} </p>
    <div class="keg-quanity" *ngIf="keg.pints >0">
      <input type="number" placeholder="Number of pints" #pintQuantity>
      <button class="btn btn-default" (click)="sellPint(pintQuantity)" >Sell Pints</button>
    </div>
    <button class="btn btn-danger" (click)="newKeg()" *ngIf="keg.pints <= 0">New Keg</button>
  `
})

export class KegComponent {
  public keg: Keg;
  sellPint(userQuantity: HTMLInputElement):void {
    if(this.keg.pints - parseInt(userQuantity.value) < 0) {
      alert("Arg not enough pints!");
    } else {
      this.keg.pints -= parseInt(userQuantity.value);
    }
  }
  newKeg():void {
    this.keg.pints = 124;
  }
}
