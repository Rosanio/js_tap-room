import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'kegs-list',
  inputs: ['kegsList'],
  template: `
    <div *ngFor="#currentKeg of kegsList">
      <h3>{{ currentKeg.name }}</h3>
      <p>Cost: \${{ currentKeg.price }}</p>
    </div>
  `
})

export class KegsListComponent {
  public kegsList: Keg[];
  constructor() {

  }

}
