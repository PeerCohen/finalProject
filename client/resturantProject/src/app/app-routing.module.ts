import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInUserComponent } from './components/user/sing-in-user/sing-in-user.component';
import { LoginComponent } from './components/user/login/login.component';
import { MenuByCategotyComponent } from './components/user/menu-by-categoty/menu-by-categoty.component';
import { MenuComponent } from './components/user/menu/menu.component';
import { HomeComponent } from './components/user/home/home.component';
import { PartyComponent } from './components/user/party/party.component';
import { GiftCardComponent } from './components/user/gift-card/gift-card.component';
import { FormPartyPageComponent } from './components/user/form-party-page/form-party-page.component';
import { PaymentComponent } from './components/user/payment/payment.component';
import { SelectedUserEntranceComponent } from './components/selected-user-entrance/selected-user-entrance.component';
import { ManagerHomeComponent } from './components/management/manager-home/manager-home.component';
import { WorkerHomeComponent } from './components/worker/worker-home/worker-home.component';
import { MenuManagementComponent } from './components/management/menu-management/menu-management.component';
import { SpecialOrderComponent } from './components/worker/special-order/special-order.component';
import { AddressSendingComponent } from './components/user/address-sending/address-sending.component';
import { OptionOrderComponent } from './components/user/option-order/option-order.component';
import { MenuSwiperComponent } from './components/user/menu-swiper/menu-swiper.component';
import { AppComponent } from './app.component';
import { EmployeeGuard } from './Auth/auth.guard';
import { CalandarToEmployeeComponent } from './components/Calandar/calandar-to-employee/calandar-to-employee.component';
import { CalandarToManagerComponent } from './components/Calandar/calandar-to-manager/calandar-to-manager.component';
import { TableOrderComponent } from './components/user/table-order/table-order.component';



const routes: Routes = [
  {
    path: "swiper",
    component: MenuSwiperComponent,

  },
  {
    path: "option-order",
    component: OptionOrderComponent,
  },
  {
    path: "address-sending",
    component: AddressSendingComponent,
  },
  {
    path: "special-order",
    component: SpecialOrderComponent,
  },
  {
    path: "payment",
    component: PaymentComponent,
  },
  {
    path: "menuManagement",
    component: MenuManagementComponent,
  },
  {
    path: "workerHome",
    component: WorkerHomeComponent,
  },
  {
    path: "managerHome",
    component: ManagerHomeComponent,
    //canActivate: [EmployeeGuard],
  },
  {
    path: "selectedUserEntrance",
    component: SelectedUserEntranceComponent,
  },
  {
    path: "sign-in-user",
    component: SingInUserComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "menu-by-categoty",
    component: MenuByCategotyComponent,
  },
  {
    path: "party",
    component: PartyComponent,
  },
  {
    path: "menu",
    component: MenuComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch:"full"
  },
  {
    path: "gift-card",
    component : GiftCardComponent, 
  },
  {
    path: "form-party",
    component : FormPartyPageComponent,
  },
  {
    path: "CalandarToEmployee",
    component : CalandarToEmployeeComponent,
  },
  {
   path: "CalandarToManager",
   component : CalandarToManagerComponent,
  },
  {
    path: "table-order",
    component : TableOrderComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
