import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule}from'@angular/common/http';

import { MenuComponent } from './components/user/menu/menu.component';
;
import { LoginComponent } from './components/user/login/login.component';

import { ProfileComponent } from './components/user/profile/profile.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { PreviousOrdersComponent } from './components/user/previous-orders/previous-orders.component';
import { CouponsComponent } from './components/user/coupons/coupons.component';
import { CurrentOrderComponent } from './components/user/current-order/current-order.component';
import { SignInComponent } from './components/worker/sign-in/sign-in.component';
import { CustomersOrdersComponent } from './components/worker/sign-in/customers-orders/customers-orders.component';
import { CustomersOrderComponent } from './components/worker/customers-order/customers-order.component';

import { HandlingOrdersComponent } from './components/worker/handling-orders/handling-orders.component';

import { MyPresenceComponent } from './components/worker/my-presence/my-presence.component';
import { UpdatePresenceComponent } from './components/worker/update-presence/update-presence.component';
import { InvitationModeldialogComponent } from './components/user/invitation-modeldialog/invitation-modeldialog.component';



@NgModule({
  declarations: [
    AppComponent,
    
    MenuComponent,
    
    LoginComponent,
   
    ProfileComponent,
    UserUpdateComponent,
    PreviousOrdersComponent,
    CouponsComponent,
    CurrentOrderComponent,
    SignInComponent,
    CustomersOrdersComponent,
    CustomersOrderComponent,
   
    HandlingOrdersComponent,
    
    MyPresenceComponent,
    UpdatePresenceComponent,
    InvitationModeldialogComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
