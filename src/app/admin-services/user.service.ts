import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { WebService } from '../services/web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private webservice: WebService) { }

  searchUser(mobileNo: number): Observable<any>{
    return this.webservice.post(this.router.url,
      { mobileNo });
  }

  searchUserByCity(city: string): Observable<any>{
    return this.webservice.post(this.router.url,
      { city });
  }

  deleteUser(mobileNo: number): Observable<any>{
    return this.webservice.delete(this.router.url);
  }
}
