import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private authservice: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let authService = this.injector.get(AuthService);
    let tokenizedReq = request.clone({
      setHeaders:{
        Authorization: `Bearer ${this.authservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
