import { Component, Input, OnInit } from '@angular/core';
import { InputForm } from '../input-form';
import * as moment from "moment";
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent extends InputForm implements OnInit {

  @Input() dateFormat: string = "YYYY-MM-DD";
  dateValue: any;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.formGroup.get(this.name).valueChanges.subscribe(value => {
      const date = new Date(moment(value).format(this.dateFormat));
      this.dateValue = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    });
  }

  onValueChange(value) {
    if (value) {
      var newDate = new Date(Date.UTC(value.year, value.month - 1, value.day));
      const convertedDate: string = moment(newDate).format(this.dateFormat);
      if(convertedDate !== "Invalid date"){
        this.formGroup.get(this.name).setValue(convertedDate);
        this.onChange.emit(convertedDate); 
      }
      else{
        this.formGroup.get(this.name).setValue(null);
        this.onChange.emit(null);
      }
    }else{
      this.formGroup.get(this.name).setValue(null);
      this.onChange.emit(null);
    } 
  }
}
