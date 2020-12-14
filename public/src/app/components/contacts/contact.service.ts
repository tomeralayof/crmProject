import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//here will be written the parameters from the database
export interface Contact{
  userId: number,
  id: number,
  title: string,
  body: string,

}



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // url of the server
  // url = '/api/customer/table'

  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  contacts: Observable<Contact[]>

  constructor(public contact: HttpClient) {
    this.contacts = this.contact.get<Contact[]>(this.url)
   }

   getContacts(){
     return this.contacts
   }

  //post the data to the server
  // showContact(showContact){
  //   return this.contact.get(this.url, showContact)
  // }



}