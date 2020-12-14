import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AddcustomerService {

  constructor(private http: HttpClient) { }

  url = '/api/customer'

  addCustomer(customerData){
    return this.http.post<any>(this.url, customerData)
  };
}
