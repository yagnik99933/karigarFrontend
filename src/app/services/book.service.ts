import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { Booking } from '../shared/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  userId: string;
  person: any;
  constructor(private webservice: WebService, private router: Router) { }

  booking(
    city: string,
    serviceType: string,
    name: string,
    mobileNo: number,
    houseNo: string,
    colony: string,
    area: string,
    landmark: string,
    date: string,
    timeSlot: string
    ): Observable<any>{
      this.person = JSON.parse(localStorage.getItem("Person"));
      this.userId = this.person._id;
      // Error point
    return this.webservice.post('/user/'+this.userId+'/bookservice', {city, serviceType, name, mobileNo, houseNo, colony,
    area, landmark, date, timeSlot});
  }

  previousBooking(): Observable<any>{
    return this.webservice.get(this.router.url);
  }
}
