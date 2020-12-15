import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderstatusService {

  constructor(private webservice: WebService, private router: Router) { }

  showOrder(): Observable<any>{
    return this.webservice.get(this.router.url);
  }

  showOrderDetails(): Observable<any>{
    return this.webservice.get(this.router.url);
  }

  showPreviousOrder(): Observable<any>{
    return this.webservice.get(this.router.url);
  }

  cancelOrder(){
    return this.webservice.post(this.router.url, {});
  }
}
