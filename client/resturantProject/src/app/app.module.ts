import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './components/user/menu/menu.component';
;
import { LoginComponent } from './components/user/login/login.component';

import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { PreviousOrdersComponent } from './components/user/previous-orders/previous-orders.component';
import { CouponsComponent } from './components/user/coupons/coupons.component';
import { CurrentOrderComponent } from './components/user/current-order/current-order.component';
import { CustomersOrderComponent } from './components/worker/customers-order/customers-order.component';

import { HandlingOrdersComponent } from './components/worker/handling-orders/handling-orders.component';

import { MyPresenceComponent } from './components/worker/my-presence/my-presence.component';
import { UpdatePresenceComponent } from './components/worker/update-presence/update-presence.component';
import { ProfileUserComponent } from './components/user/profile-user/profile-user.component';
import { SingInUserComponent } from './components/user/sing-in-user/sing-in-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { MenuByCategotyComponent } from './components/user/menu-by-categoty/menu-by-categoty.component';
import { StarComponent } from './components/user/star/star.component';
import { DoseCategoryComponent } from './components/user/dose-category/dose-category.component';
import { HomeComponent } from './components/user/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MiniCartComponent } from './components/user/mini-cart/mini-cart.component';
import { PartyComponent } from './components/user/party/party.component';
import { GiftCardComponent } from './components/user/gift-card/gift-card.component';
import { CateringComponent } from './components/user/catering/catering.component';
import { BigOrdersComponent } from './components/user/big-orders/big-orders.component';
import { BirthdayComponent } from './components/user/birthday/birthday.component';
import { RemoveProductComponent } from './components/user/dialogs/remove-product/remove-product.component';
import { GiftcardContactComponent } from './components/user/contact-for-party/giftcard-contact/giftcard-contact.component';
import { BirthdayContactComponent } from './components/user/contact-for-party/birthday-contact/birthday-contact.component';
import { BigOrderContactComponent } from './components/user/contact-for-party/big-order-contact/big-order-contact.component';
import { CateringContactComponent } from './components/user/contact-for-party/catering-contact/catering-contact.component';
import { FormPartyPageComponent } from './components/user/form-party-page/form-party-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoComponent } from './components/logo/logo.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { ContactDetailsComponent } from './components/user/contact-for-party/contact-details/contact-details.component';
import { PartyEventComponent } from './components/user/party-event/party-event.component';
import { OptionEnterUserComponent } from './components/user/option-enter-user/option-enter-user.component';







@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    UserUpdateComponent,
    PreviousOrdersComponent,
    CouponsComponent,
    CurrentOrderComponent,
    CustomersOrderComponent,
    HandlingOrdersComponent,
    MyPresenceComponent,
    UpdatePresenceComponent,
    ProfileUserComponent,
    SingInUserComponent,
    MenuByCategotyComponent,
    StarComponent,
    DoseCategoryComponent,
    HomeComponent,
    MiniCartComponent,
    PartyComponent,
    GiftCardComponent,
    CateringComponent,
    BigOrdersComponent,
    BirthdayComponent,
    RemoveProductComponent,
    GiftcardContactComponent,
    BirthdayContactComponent,
    BigOrderContactComponent,
    CateringContactComponent,
    FormPartyPageComponent,
    LogoComponent,
    ContactDetailsComponent,
    PartyEventComponent,
    OptionEnterUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatTreeModule,
    MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
