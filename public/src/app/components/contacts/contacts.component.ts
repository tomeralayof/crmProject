import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Contact} from '../../interfaces/contacts'
import {ContactsService} from '../../contacts.service'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  // contacts: Contact[] = []

  constructor(private contact: ContactsService) {

   }

    contactGet(){
      this.contact
    }

  ngOnInit(): void {
  }

}
