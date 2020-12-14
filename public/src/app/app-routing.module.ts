// import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpFetchComponent } from './components/http-fetch/http-fetch.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TermUseComponent } from './components/term-use/term-use.component';


import { CreateuserComponent } from './components/createuser/createuser.component';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerCreatedComponent } from './components/customer-created/customer-created.component';


const routes: Routes = [
  {path: "", redirectTo:"createUser", pathMatch:"full"},
  {path: "createUser", component:CreateuserComponent},
  { path:'login', component: LoginComponent},
  {path: "api/terms", component: TermUseComponent},
  {path: 'home',component: HomeComponent},
  {path:"customers",component:CustomersComponent},
  {path: "add/customer",component:AddCustomerComponent},
  {path:"customer/created", component:CustomerCreatedComponent},
  {path:"add", component:AddCustomerComponent},
  {path:"contacts", component:ContactsComponent},






  // {path:"page-not-found", component:PageNotFoundComponent},
  // {path: "**", redirectTo:"page-not-found", pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }