import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  providerId: string
  person: any;
  constructor(private webservice: WebService, private router: Router,
    private cookie: CookieService) { }

  notify(): Observable<any>{
    // console.log("Id through Cookie"+this.cookie.get("Id"));
    this.person = JSON.parse(localStorage.getItem("Person"));
    this.providerId = this.person._id;
    // return this.webservice.get(this.router.url);
    return this.webservice.get('/provider/'+ this.providerId );
  }

  acceptNotification(serviceId: string): Observable<any>{
    return this.webservice.post('/provider/'+ this.providerId, {serviceId});
  }

}
