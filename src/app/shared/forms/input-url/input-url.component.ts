import { Component, Input } from '@angular/core';
import { InputForm } from '../input-form';

@Component({
  selector: 'app-input-url',
  templateUrl: './input-url.component.html',
  styleUrls: ['./input-url.component.scss']
})
export class InputUrlComponent extends InputForm {

  @Input() pattern: string = "https://.*";

  constructor() { 
    super();
  }

}
