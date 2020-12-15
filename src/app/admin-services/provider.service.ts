import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../services/web.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private router: Router, private webservice: WebService) { }

  searchProvider(mobileNo: number): Observable<any>{
    return this.webservice.post(this.router.url,
      { mobileNo });
  }

  deleteProvider(mobileNo: number): Observable<any>{
    return this.webservice.delete(this.router.url);
  }
}
