import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { WebService } from '../services/web.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private webservice: WebService) { }

  login(
    username: string,
    password: string): Observable<any> {

    return this.webservice.post(this.router.url,
    { username, password});
  }

}
