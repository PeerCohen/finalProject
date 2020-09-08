import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInUserComponent } from './components/user/sing-in-user/sing-in-user.component';
import { ProfileComponent } from './components/worker/profile/profile.component';
import { LoginComponent } from './components/user/login/login.component';
import { MenuByCategotyComponent } from './components/user/menu-by-categoty/menu-by-categoty.component';
import { MenuComponent } from './components/user/menu/menu.component';
import { HomeComponent } from './components/user/home/home.component';
import { StarComponent } from './components/user/star/star.component';
import { PartyComponent } from './components/user/party/party.component';




const routes: Routes = [
  {
    path: "star",
    component: StarComponent,
  },
  {
    path: "sign-in-user",
    component: SingInUserComponent,
  },
  {
    path: "profile-user",
    component: ProfileComponent,
  },
  {
    path: "log-in",
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
    redirectTo: "sign-in-user",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
