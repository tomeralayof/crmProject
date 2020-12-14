import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpFetchComponent } from './components/http-fetch/http-fetch.component';
// import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { FormControlName } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TermUseComponent } from './components/term-use/term-use.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { SideFinalComponent } from './components/side-final/side-final.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerCreatedComponent } from './components/customer-created/customer-created.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    PageHeaderComponent,
    ContactsComponent,
    PageNotFoundComponent,
    CustomersComponent,
    HttpFetchComponent,
    CreateuserComponent,
    TermUseComponent,
    MainNavbarComponent,
    LoginComponent,
    AddCustomerComponent,
    SideFinalComponent,
    HomeComponent,
    CustomerCreatedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,


    // HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCKpY4dFZV3ihWDjRkAWRSQbXm_E2u_9NE",
      authDomain: "royalcrm-tomer.firebaseapp.com",
      databaseURL: "https://royalcrm-tomer.firebaseio.com",
      projectId: "royalcrm-tomer",
      storageBucket: "royalcrm-tomer.appspot.com",
      messagingSenderId: "663197955326",
      appId: "1:663197955326:web:aeae72348e96342fcf21af"
    },)
    // AngularFireModule.initializeApp(environment.fireBaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
