import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

// Enums
import { Role } from '../enum/role.enum';

@Injectable()
export class VendorGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
    private toastrService: ToastrService,
    private translateService: TranslateService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated() && (this.authService.getRoleFromToken() === Role.Vendor)) {
      return true;
    } else {
      this.toastrService.warning('errors.vendorGuard');
      this.router.navigate(['/users/list']);
      return false;
    }
  }

}
