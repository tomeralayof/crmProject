import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router'
import { getMaxListeners } from 'process';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = '/api/user';
  urlLogIn = '/api/user/login'
  urlEmail = '/api/user/check-email'

  constructor(private http : HttpClient) {}

  register(userData){
    return this.http.post<any>(this.url, userData)
  };

  logInn(userData){
    return this.http.post<any>(this.urlLogIn, userData)
  };

  emailExist(email){
    return this.http.post<any>(this.urlEmail, {"email": email});
  }


  public checkEmail = (emailTextbox: AbstractControl): Observable<ValidationErrors> | null => {
    const email = emailTextbox.value;
    // console.log("Checking if email exists: " + email)
        this.emailExist(email)
         .subscribe((res)=>{
           //console.log(res)
           if (res.exist) {
             emailTextbox.setErrors({"exist": true})
          }
         });

        return null;
  }

}