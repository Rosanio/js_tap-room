import { Component } from 'angular2/core';
import {KegsListComponent} from './kegs-list.component';
import { Keg } from './keg.model';
import {KegAlcoholComponent} from './keg-alcohol.component';
import {KegInventoryListComponent} from './keg-inventory-list.component';

@Component({
  selector: 'my-app',
  directives: [KegsListComponent, KegAlcoholComponent, KegInventoryListComponent],
  template: `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand" href="#"><keg-alcohol id="logo"></keg-alcohol></span>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li (click)="clickBar()"[class.active]="selectedDiv === 'barSide'"><a href="#" class="barSlide">Barrr!</a></li>
          <li (click)="clickInventory()" [class.active]="selectedDiv === 'inventorySide'"><a href="#" class="inventorySlide">View Inventory</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="barSide">
      <h1>Barrr!</h1>
      <kegs-list [kegsList] = "kegs"></kegs-list>

    </div>
    <div class="inventorySide">
      <h1>KegsList</h1>
      <keg-inventory-list [kegInventoryList] = "kegInventory"></keg-inventory-list>
    </div>
  </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
  public kegInventory: Array<any>;
  public selectedDiv: string = "barSide";
  constructor() {
    this.kegs = [
      new Keg("Parrot Ale", 0, "Avast Inc.", 1.95, 8, "Ale"),
      new Keg("Walk-the-Plank", 1, "Avast Inc.", 100.95, 7, "Stout"),
      new Keg("Eyepatch Lager", 2, "Jack Sparrow Enterprises", 5.95, 20, "Lager"),
      new Keg("Peg Legs and Hook Hands", 3, "Blackbeard...just Blackbeard", 70.95, 8, "IPA")
    ];
    this.kegInventory = [
      {keg: new Keg("Parrot Ale", 0, "Avast Inc.", 1.95, 8, "Ale"), quantity: 40},
      {keg: new Keg("Walk-the-Plank", 1, "Avast Inc.", 100.95, 7, "Stout"), quantity: 2},
      {keg: new Keg("Eyepatch Lager", 2, "Jack Sparrow Enterprises", 5.95, 20, "Lager"), quantity: 100},
      {keg: new Keg("Peg Legs and Hook Hands", 3, "Blackbeard...just Blackbeard", 70.95, 8, "IPA"), quantity: 12}
    ];
  }
  clickBar() {
    this.selectedDiv = "barSide";
  }
  clickInventory() {
    this.selectedDiv = "inventorySide";
  }
}
