import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class WebService {
    readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string){
    return this.http.get<any>(`${this.ROOT_URL}${uri}`);
  }

  post(uri: string, payload: Object){
    return this.http.post<any>(`${this.ROOT_URL}${uri}`, payload);
  }

  put(uri: string, payload: Object){
    return this.http.put<any>(`${this.ROOT_URL}${uri}`, payload);
  }

  // patch(uri: string, payload: Object){
  //   return this.http.patch<any>(`${this.ROOT_URL}${uri}`, payload);
  // }

  delete(uri: string){
    return this.http.delete<any>(`${this.ROOT_URL}/${uri}`);
  }
}
