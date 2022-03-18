import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { InputForm } from '../input-form';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputSelectComponent extends InputForm implements OnInit {

  @Input() values: any[] = [];
  @Input() displayField: string;
  @Input() returnValue: string;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    if(this.isDisabled){
      this.formControlValue.disable();
    }
  }
}
