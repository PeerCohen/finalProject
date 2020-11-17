import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class EmployeeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isEmployee()) {
      return true;
    }
    else {
      this.router.navigate(['/home']);
      return false;
    }

  }
}
@Injectable()
export class VisitersGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isEmployee()) {
      return true;
    }
    else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
@Injectable()
export class ManagerGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isManager()) {
      return true;
    }
    else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
