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
  `
})

export class KegComponent {
  public keg: Keg;
}
