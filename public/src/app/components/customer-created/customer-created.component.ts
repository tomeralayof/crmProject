import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-created',
  templateUrl: './customer-created.component.html',
  styleUrls: ['./customer-created.component.css']
})
export class CustomerCreatedComponent implements OnInit {

    constructor(private rought: Router) { }

  goToContacts(contacts){
    this.rought.navigate([`${contacts}`]);
  }

  ngOnInit(): void {
  }

}
