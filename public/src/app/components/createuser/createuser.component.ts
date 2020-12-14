import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormControl, FormControlName, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { invalid } from '@angular/compiler/src/render3/view/util';



@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})


export class CreateuserComponent implements OnInit {
  createAccount = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2), Validators.maxLength(255)]),
    lastName: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.minLength(2), Validators.maxLength(255)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.minLength(6),Validators.maxLength(255), this.userService.checkEmail]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    checkbox: new FormControl('', [Validators.requiredTrue])
  });
    get firstName() {
      return this.createAccount.get('firstName');
    };
     get lastName(){
      return this.createAccount.get('lastName');
    };
    get email(){
      return this.createAccount.get('email');
    };
     get password(){
      return this.createAccount.get('password');
    };
    get checkbox(){
      return this.createAccount.get('checkbox');
    };

    constructor(private userService : UserServiceService, private router: Router ){}

    goToApp(navigatePage:string){
      this.router.navigate([`${navigatePage}`])
      this.userService.register(this.createAccount.value)
      .subscribe((res)=>{
        console.log("tomer")
        console.log(res)
      });
    }

  ngOnInit(): void {
  }
}