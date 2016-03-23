import { Component } from 'angular2/core';
import {KegsListComponent} from './kegs-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegsListComponent],
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
        <a class="navbar-brand" href="#">Barrr!</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li [class.active]="selectedDiv === 'barSide'"><a href="#" class="slide">Barrr</a></li>
          <li [class.active]="selectedDiv === 'inventorySide'"><a href="#" class="slide">View Inventory</a></li>
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
      something else
    </div>
  </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
  public selectedDiv: string = "barSide";
  constructor() {
    this.kegs = [
      new Keg("Parrot Ale", 0, "Avast Inc.", 1.95, 8, "Ale"),
      new Keg("Walk-the-Plank", 1, "Avast Inc.", 100.95, 7, "Stout"),
      new Keg("Eyepatch Lager", 2, "Jack Sparrow Enterprises", 5.95, 20, "Lager"),
      new Keg("Peg Legs and Hook Hands", 3, "Blackbeard...just Blackbeard", 70.95, 8, "IPA")
    ];
  }
}
