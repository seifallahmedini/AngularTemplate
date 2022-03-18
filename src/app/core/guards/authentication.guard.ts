import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Role } from '../enum/role.enum';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
    private toastrService: ToastrService,
    private translateService: TranslateService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated() && !this.authService.jwtIsExpired() &&
    (this.authService.getRoleFromToken() === Role.Vendor || this.authService.getRoleFromToken() === Role.Admin)) {
      return true;
    } else {
      this.toastrService.warning(this.translateService.instant('errors.authroizationError'));
      this.authService.logout();
      return false;
    }
  }
}
