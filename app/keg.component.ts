import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <p>Brand: {{keg.brand}} </p>
    <p>Keg Price: \${{keg.price}} </p>
    <p>Pint Price: \${{pintPrice(keg)}}
    <p>Alcohol Content: {{keg.drunkness}}% </p>
    <p>Type of Beer: {{keg.type}} </p>
  `
})

export class KegComponent {
  public keg: Keg;
  public pintPrice(keg: Keg): string {
    return (Math.round((this.keg.price/124 + 0.25)*100)/100).toFixed(2);
  }

}
