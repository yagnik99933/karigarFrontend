import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstatusService {
  person: any;
  userId: any;

  constructor(private webservice: WebService, private router: Router) { }

  showBooking(): Observable<any>{
    return this.webservice.get(this.router.url);
  }

  changeDateTime(
    timeSlot: string,
    date: string
  ): Observable<any>{
    return this.webservice.put(this.router.url , { timeSlot,date });
  }

  cancelBooking(): Observable<any>{
    return this.webservice.post(this.router.url , {});
  }

  showProfile(): Observable<any>{
    return this.webservice.get(this.router.url);
  }

  submitFeedback(
    category: string,
    comment: string,
    starCount: number
  ): Observable<any>{
    this.person = JSON.parse(localStorage.getItem("Person"));
    this.userId = this.person._id;
    return this.webservice.post(this.router.url, {category, comment, rating: starCount});
  }
}
