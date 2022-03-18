import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputForm } from '../input-form';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent extends InputForm implements OnInit, OnDestroy {

  @Input() multiple: boolean = false;
  @Input() accept: string;
  @Input() isDetails: boolean = false;

  file: any;
  displayedNames: string;
  value: any;
  urlFile: any[] = [];
  subscrition: Subscription;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    // if(this.formControlValue.value){
    //   this.urlFile.push(this.formControlValue.value);
    // }
    this.subscrition = this.formControlValue.valueChanges.subscribe(value => {
      if(!value){
        this.displayedNames = null;
        this.urlFile = [];
      }else{
        this.urlFile = [];
        this.urlFile.push(this.formControlValue.value);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscrition?.unsubscribe();
  }

  handleFileInput(files: FileList): void{
    this.file = null;
    if (files.length > 0) {
      if(this.multiple){
        this.file = [];
        for(let i=0; i<files.length; i++){
          this.file.push(files.item(i));
        }
        this.displayedNames = this.file.map(file => file.name).join(",");
      }else{
        this.file = files[0];
        this.displayedNames = this.file.name;
      }
    }else{
      this.displayedNames = null;
    }
    this.formGroup.get(this.name).setValue(this.file);
    if(this.file){
      const reader = new FileReader();
      if(!this.multiple){
        this.urlFile = [];
        reader.readAsDataURL(this.file);
        reader.onload = () => {
          this.urlFile.push(reader.result);
        };
      }else{
        // this.file.forEach(async(file) => {
        //   reader.readAsDataURL(file);
        //   reader.onload = () => {
        //       console.log(reader.result);
        //   };
        // });
      }
    }
  }

  onValueChange(value) {
    if(!value){
      this.displayedNames = null;
      this.urlFile = [];
    }
  }
}
