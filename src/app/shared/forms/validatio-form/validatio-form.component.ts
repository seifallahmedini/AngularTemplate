import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validatio-form',
  templateUrl: './validatio-form.component.html',
  styleUrls: ['./validatio-form.component.scss']
})
export class ValidatioFormComponent {

  @Input() formControlValue: FormControl;
  @Input() isSubmitted: boolean = false;
  
  constructor() { }
}
