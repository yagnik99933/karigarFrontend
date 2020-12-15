import {Component, OnInit, ViewChild} from '@angular/core';
import { BookService } from 'src/app/services/book.service';

export interface PeriodicElement {
  position: number;
  serviceType: string;
  address: string;
  date: string;
  timeslot: string;
}

@Component({
  selector: 'app-previouslybookedservice',
  templateUrl: './previouslybookedservice.component.html',
  styleUrls: ['./previouslybookedservice.component.scss']
})
export class PreviouslybookedserviceComponent implements OnInit {

  displayedColumns: string[] = ['position', 'serviceType', 'address', 'date','timeslot'];
  previousBookingDetails: any;
  person: any;
  personName: string;

  constructor(private bookService: BookService){}
  ngOnInit() {
  this.person = JSON.parse(localStorage.getItem("Person"));
  this.personName = this.person.name;
  this.bookService.previousBooking()
  .subscribe((details)=>{
    console.log(details);
    this.previousBookingDetails = details;
  })
  }

}
