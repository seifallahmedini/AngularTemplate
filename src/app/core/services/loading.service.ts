import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingService {

  isLoading: boolean;

  constructor(private spinner: NgxSpinnerService) { }

  startLoading(): void{
    this.isLoading = true;
    this.spinner.show("spinner");
  }

  stopLoading(): void{
    this.isLoading = false;
    this.spinner.hide("spinner");
  }

}
