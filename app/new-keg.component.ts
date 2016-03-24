import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form col-sm-8">
      <h3>Order a new keg:</h3>
      <input placeholder="Name" class="input-lg" #newName>
      <input placeholder="Brand" class="input-lg" #newBrand>
      <input type="number" step="any" placeholder="Price" class="input-lg" #newPrice>
      <input placeholder="Alcohol" type="number" step="any" class="input-lg" #newAlcohol>
      <select class="form-control" #newType>
        <option value="Ale">Ale</option>
        <option value="Stout">Stout</option>
        <option value="Lager">Lager</option>
        <option value="IPA">IPA</option>
      </select>
      <input type="number" placeholder="Quantity" class="input-lg" #newQuantity>
      <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol, newType, newQuantity)" class="btn btn-primary">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<any>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement, userType: HTMLInputElement, userQuantity: HTMLInputElement) {
    var kegArray: Array<any> = [userName.value, userBrand.value, userPrice.value, userAlcohol.value, userType.value, userQuantity.value];
    console.log(kegArray);
    this.onSubmitNewKeg.emit(kegArray);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";
    userQuantity.value = "";
  }
}
