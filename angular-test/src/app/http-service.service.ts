import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  get(endpoint, callback) {
    return this.httpClient.get(endpoint).subscribe((data) => {
      callback(data);
    });
  }

  post(endpoint, bean, callback) {
    return this.httpClient.post(endpoint, bean).subscribe((data) => {
      callback(data);
    });
  }
}
