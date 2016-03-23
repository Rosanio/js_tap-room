import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-alcohol',
  template: `
    <span><img src="https://cdn4.iconfinder.com/data/icons/mobile-app-icons/512/beermug.png" class="beer-icons"></span>
  `
})

export class KegAlcoholComponent{
  constructor() {};
}
