import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddcustomerService } from './addcustomer.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomer = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(255),Validators.pattern('[a-zA-Z ]*')]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(255),Validators.pattern('[a-zA-Z ]*')]),
    address: new FormControl(''),
    city: new FormControl(''),
    product: new FormControl(''),
    numberOfProduct: new FormControl(''),
    amount: new FormControl(''),

  });

  get firstName() {
    return this.addCustomer.get('firstName');
  };
  get lastName(){
    return this.addCustomer.get('lastName')
  };
  get address(){
    return this.addCustomer.get('address')
  };
  get city(){
    return this.addCustomer.get('city')
  };
  get product(){
    return this.addCustomer.get('product')
  };
  get numberOfProduct(){
    return this.addCustomer.get('numberOfProduct')
  };
  get amount(){
    return this .addCustomer.get('amount')
  };


  constructor(private customer: AddcustomerService,private rought: Router) { }

  redirect(navigatePage){
    this.rought.navigate([`${navigatePage}`])
    this.customer.addCustomer(this.addCustomer.value)
    .subscribe((succsess)=>{
      console.log(succsess)

    })

  }
  ngOnInit(): void {
  }

}
