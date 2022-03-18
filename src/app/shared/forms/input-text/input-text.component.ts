import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputForm } from '../input-form';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends InputForm {

  @Input() minLength: number;
  @Input() type: string;

  constructor() {
    super();
  }

}
