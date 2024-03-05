import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  spinnerRequestCount = 0;

  constructor(private spinnerServices: NgxSpinnerService) { }

  spin() {
    this.spinnerRequestCount++;
    this.spinnerServices.show(undefined, {
      type: "ball-scale-multiple",
      bdColor: "rgba(255,255,255,0)",
      color: "#333333"
    })
  }

  idle(){
    this.spinnerRequestCount--;
    if(this.spinnerRequestCount<=0) {
      this.spinnerRequestCount = 0;
      this.spinnerServices.hide()
    }
  }
}
