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
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';



import { MenuByCategotyComponent } from './components/user/menu-by-categoty/menu-by-categoty.component';
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
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

import { ContactDetailsComponent } from './components/user/contact-for-party/contact-details/contact-details.component';
import { PartyEventComponent } from './components/user/party-event/party-event.component';
import { OptionEnterUserComponent } from './components/user/option-enter-user/option-enter-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './components/user/payment/payment.component';
import { SelectedUserEntranceComponent } from './components/selected-user-entrance/selected-user-entrance.component';
import { ManagerHomeComponent } from './components/management/manager-home/manager-home.component';
import { WorkerHomeComponent } from './components/worker/worker-home/worker-home.component';
import { MenuManagementComponent } from './components/management/menu-management/menu-management.component';
import { CategoryManagementComponent } from './components/management/category-management/category-management.component';
import { AddCategoryDialogComponent } from './components/management/add-category-dialog/add-category-dialog.component';
import { DeleteCategoryDialogComponent } from './components/management/delete-category-dialog/delete-category-dialog.component';
import { EditCategoryDialogComponent } from './components/management/edit-category-dialog/edit-category-dialog.component';
import { FirstPageWorkerComponent } from './components/worker/first-page-worker/first-page-worker.component';
import { SpecialOrderComponent } from './components/worker/special-order/special-order.component';
import { LoginWorkerComponent } from './components/worker/login-worker/login-worker.component';
import { EditDoseCategoryComponent } from './components/management/edit-dose-category/edit-dose-category.component';
import { AddDoseCategoryComponent } from './components/management/add-dose-category/add-dose-category.component';
import { UpdateDoseDialogComponent } from './components/management/update-dose-dialog/update-dose-dialog.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { HeaderComponent } from './components/header/header.component';
import { OptionOrderComponent } from './components/user/option-order/option-order.component';
import { TakeAwayComponent } from './components/user/take-away/take-away.component';
import { SendingComponent } from './components/user/sending/sending.component';
import { TableOrderComponent } from './components/user/table-order/table-order.component';
import { AddressSendingComponent } from './components/user/address-sending/address-sending.component';
import { DisplayMenuComponent } from './components/user/display-menu/display-menu.component';
import { DoseCategoryOrderComponent } from './components/user/dose-category-order/dose-category-order.component';
import { MenuSwiperComponent } from './components/user/menu-swiper/menu-swiper.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { OpenBottomSheetLoginComponent } from './components/user/open-bottom-sheet-login/open-bottom-sheet-login.component';
import { OpenBottomSheetSigninComponent } from './components/user/open-bottom-sheet-signin/open-bottom-sheet-signin.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/user/home-page/home-page.component';
import { ListWorkerComponent } from './components/management/list-worker/list-worker.component';
import { ManagerWorkerComponent } from './components/management/manager-worker/manager-worker.component';
import { AddWorkerComponent } from './components/management/add-worker/add-worker.component';
import { EditWorkerDialogComponent } from './components/management/edit-worker-dialog/edit-worker-dialog.component';
import { CategoryMenuSwiperComponent } from './components/user/category-menu-swiper/category-menu-swiper.component';
import { WorkerComponent } from './components/management/worker/worker.component';
import { CalandarToEmployeeComponent } from './components/Calandar/calandar-to-employee/calandar-to-employee.component';
import { CalandarToManagerComponent } from './components/Calandar/calandar-to-manager/calandar-to-manager.component';
import { EmployeeGuard, ManagerGuard, VisitersGuard } from './Auth/auth.guard';
import { FavoriteDoseComponent } from './components/management/favorite-dose/favorite-dose.component';
import { DialogSendingComponent } from './components/user/dialog-sending/dialog-sending.component';
import { DialogSaveTableComponent } from './components/user/dialog-save-table/dialog-save-table.component';
import { CalandarEmployeeByManagerComponent } from './components/Calandar/calandar-employee-by-manager/calandar-employee-by-manager.component';
import { ManagerMassegeComponent } from './components/management/manager-massege/manager-massege.component';
import { MessegeEmloyeeComponent } from './components/management/messege-emloyee/messege-emloyee.component';
import {MatBadgeModule} from '@angular/material/badge';
import { RestaurantHomeComponent } from './components/in-resuarant/restaurant-home/restaurant-home.component';
import { RestauranTableComponent } from './components/in-resuarant/restauran-table/restauran-table.component';
import { LogoHeadComponent } from './components/logo-head/logo-head.component';
import { CartInRestaurantComponent } from './components/in-resuarant/cart-in-restaurant/cart-in-restaurant.component';
import { PreOrderInRestaurantComponent } from './components/in-resuarant/pre-order-in-restaurant/pre-order-in-restaurant.component';
import { DialogForInventComponent } from './components/in-resuarant/dialog-for-invent/dialog-for-invent.component';
import { PaymentInRestaurantComponent } from './components/in-resuarant/payment-in-restaurant/payment-in-restaurant.component';
import { DialogForPaymentComponent } from './components/in-resuarant/dialog-for-payment/dialog-for-payment.component';
import { DialogOfSpecialInventComponent } from './components/user/dialog-of-special-invent/dialog-of-special-invent.component';
import { DialogRatingComponent } from './components/user/dialog-rating/dialog-rating.component';
import { DialogForHelpComponent } from './components/in-resuarant/dialog-for-help/dialog-for-help.component';
import { DialogForAddToCartComponent } from './components/in-resuarant/dialog-for-add-to-cart/dialog-for-add-to-cart.component';
import { NewMenuComponent } from './components/user/new-menu/new-menu.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { SwiperModule } from 'swiper/angular';
import { ErrorDialogCounthandleDoseComponent } from './components/worker/error-dialog-counthandle-dose/error-dialog-counthandle-dose.component';
import { CalendarDialogComponent } from './components/worker/calendar-dialog/calendar-dialog.component';









@NgModule({
  declarations: [
    WorkerComponent,
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
    PaymentComponent,
    SelectedUserEntranceComponent,
    ManagerHomeComponent,
    WorkerHomeComponent,
    MenuManagementComponent,
    CategoryManagementComponent,
    AddCategoryDialogComponent,
    DeleteCategoryDialogComponent,
    EditCategoryDialogComponent,
    FirstPageWorkerComponent,
    SpecialOrderComponent,
    LoginWorkerComponent,
    EditDoseCategoryComponent,
    AddDoseCategoryComponent,
    UpdateDoseDialogComponent,
    HeaderComponent,
    OptionOrderComponent,
    TakeAwayComponent,
    SendingComponent,
    TableOrderComponent,
    AddressSendingComponent,
    DisplayMenuComponent,
    DoseCategoryOrderComponent,
    MenuSwiperComponent,
    OpenBottomSheetLoginComponent,
    OpenBottomSheetSigninComponent,
    FooterComponent,
    HomePageComponent,
    ListWorkerComponent,
    ManagerWorkerComponent,
    AddWorkerComponent,
    EditWorkerDialogComponent,
    CalandarToEmployeeComponent,
    CalandarToManagerComponent,
    FavoriteDoseComponent,
    DialogSendingComponent,
    DialogSaveTableComponent,
    CalandarEmployeeByManagerComponent,
    ManagerMassegeComponent,
    MessegeEmloyeeComponent,
    RestaurantHomeComponent,
    RestauranTableComponent,
    LogoHeadComponent,
    CartInRestaurantComponent,
    PreOrderInRestaurantComponent,
    DialogForInventComponent,
    PaymentInRestaurantComponent,
    DialogForPaymentComponent,
    DialogOfSpecialInventComponent,
    DialogRatingComponent,
    DialogForHelpComponent,
    DialogForAddToCartComponent,
    NewMenuComponent,
    CategoryMenuSwiperComponent,
    ErrorDialogCounthandleDoseComponent,
    CalendarDialogComponent
    


  ],
  imports: [
    SwiperModule,
    MatBadgeModule,
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
    MatExpansionModule,
    NgbModule,
    MatTableModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    NgxPayPalModule,
    GooglePlaceModule
  ],
  providers: [VisitersGuard , EmployeeGuard ,ManagerGuard, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }


