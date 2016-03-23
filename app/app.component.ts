import { Component } from 'angular2/core';
import {KegsListComponent} from './kegs-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegsListComponent],
  template: `
  <div class="container">
    <h1>Barrr!</h1>
    <kegs-list [kegsList] = "kegs"></kegs-list>
  </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Parrot Ale", 0, "Avast Inc.", 1.95, 0.08, "Ale"),
      new Keg("Walk-the-Plank", 1, "Avast Inc.", 100.95, 0.07, "Stout"),
      new Keg("Eyepatch Lager", 2, "Jack Sparrow Enterprises", 5.95, 0.20, "Lager"),
      new Keg("Peg Legs and Hook Hands", 3, "Blackbeard...just Blackbeard", 70.95, 0.08, "IPA")
    ];
  }
}
