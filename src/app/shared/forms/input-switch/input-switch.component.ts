import { Component } from '@angular/core';
import { InputForm } from '../input-form';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent  extends InputForm {
  
  constructor() { 
    super();
  }
}
