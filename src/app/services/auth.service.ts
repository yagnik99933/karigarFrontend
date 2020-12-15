import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  person: any;
  error: boolean = false;
  accessToken: any;
  constructor(private router: Router, private webservice: WebService) { }


   // Called in Home Component in RegisterUser
   registerUser(
    name: string,
    password: string,
    mobileNo: number,
    email: string,
    city: string,
  ): Observable<any>{
    return this.webservice.post('/home/registeruser',
    { name, password, mobileNo, email, city});
  }

  // Called in Home Component in RegisterProvider
  registerProvider(
    name: string,
    password: string,
    mobileNo: number,
    serviceType: string,
    email: string,
    area: string[],
    city: string ): Observable<any>
    {
    return this.webservice.post('/home/registerprovider',
      {name, password, mobileNo, serviceType, email, area, city});
  }

  login(
    mobileNo: number,
    password: string,
    providerlogin: boolean): Observable<any> {

    return this.webservice.post('/home',
    { mobileNo, password, providerlogin});
  }

  // Checks whether Token exists in local storage or not.
  loggedIn(){
    this.person = JSON.parse(localStorage.getItem("Person"));
    if(this.person!=null){
      this.accessToken = this.person.accessToken;
      return !!this.accessToken;
    }
    else
      return false;
  }

  // For logging Out (called in Header Component)
  logoutUser(){
    localStorage.removeItem("Person");
    this.router.navigate(['/home']);
  }

  getToken(){

    this.person = JSON.parse(localStorage.getItem("Person"));
    if(this.person!=null){
      this.accessToken = this.person.accessToken;
      // console.log(this.accessToken);
      return this.accessToken;
    }
    else
      return '';

  }
}
