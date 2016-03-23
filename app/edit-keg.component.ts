import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
  <div class="keg-form col-sm-8">
  <hr>
    <h3>Edit keg information:</h3>
    <input [(ngModel)]="keg.name" class="input-lg"/>
    <input [(ngModel)]="keg.brand" class="input-lg"/>
    <input [(ngModel)]="keg.price" type="number" step="any" class="input-lg"/>
    <input [(ngModel)]="keg.drunkness" type="number" step="any" class="input-lg"/>
    <select [(ngModel)]="keg.type" class="form-control">
      <option value="Ale">Ale</option>
      <option value="Stout">Stout</option>
      <option value="Lager">Lager</option>
      <option value="IPA">IPA</option>
    </select>
  </div>
  `
})

export class EditKegComponent {
  public keg: Keg;
}
