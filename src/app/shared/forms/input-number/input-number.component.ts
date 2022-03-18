import { Component, Input } from '@angular/core';
import { InputForm } from '../input-form';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent extends InputForm {

  @Input() minValue: number;
  @Input() maxValue: number;

  constructor() { 
    super();
  }

}
