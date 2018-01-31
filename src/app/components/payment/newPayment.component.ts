import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newPayment',
  templateUrl: './newPayment.component.html',
  styleUrls: ['./newPayment.component.css']
})
export class NewPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  };

  receivableAmount: number = 0;
  sendAmount: number = 0;

  calc(newValue):void {
    this.sendAmount = newValue;
    this.receivableAmount = this.sendAmount * .93;
    console.log(this.receivableAmount);
  }
} 
