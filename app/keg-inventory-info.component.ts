import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-inventory-info',
  inputs: ['keg'],
  template: `
    <p>Kegs Remaining: {{keg}} </p>
  `
})

export class KegInventoryInfoComponent {

}
