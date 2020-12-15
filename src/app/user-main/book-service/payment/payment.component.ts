import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  person: any;
  personName: string;
  personId: string;
  constructor() { }

  ngOnInit(){
    this.person = JSON.parse(localStorage.getItem("Person"));
    this.personName = this.person.name;
    this.personId = this.person._id;
  }

}
