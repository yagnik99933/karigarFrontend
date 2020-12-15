import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { User } from '../shared/user';
import { Provider } from '../shared/provider';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user: User;
  provider: Provider;
  constructor(private router: Router, private webservice: WebService) { }

  login(
    mobileNo: number,
    password: string,
    providerlogin: boolean
  ){
    return this.webservice.post('/home',
    { mobileNo, password, providerlogin});
  }

}
