import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import {UserServiceService} from "../createuser/user-service.service"
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(255)]),
    password: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(255)])
  });
  get email(){
    return this.myform.get('email');
  };
  get password(){
    return this.myform.get('password')
  };

  constructor(private sendData: UserServiceService, private redirectRoute: Router) { };

   login(getData){
    this.sendData.logInn(this.myform.value)
    .subscribe((res)=>{
      console.log(res)
    });
    this.redirectRoute.navigate([`${getData}`]);
  };


  ngOnInit(): void {
  }

}
