import { Component, Input } from '@angular/core';
import { CountryInfo } from '../country-info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  Object = Object;
  @Input()
  countryInfo: CountryInfo | undefined;
}
