import { AuthenticationService as AuthService} from 'app/core/services/authentication.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GENToastrService  } from 'app/shared/services/toastr.service';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private genToastrService: GENToastrService,
    private formBuilder: FormBuilder
    ) { }

  localSubscription: Subscription;
  loginUser: Login = {
  email: '',
  password: '',
  };
  submitted: boolean = false;
  loading: boolean = false;
  loginForm = this.formBuilder.group({
  email : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,3}$')]),
  password : new FormControl('', [Validators.required, Validators.minLength(8),
                            Validators.maxLength(50)]),

  });
  // On submit button click
  get f() { return this.loginForm.controls; }

  onSubmit() {
  this.submitted = true;
  if (this.loginForm.valid) {
      this.loading = true;
      this.loginUser.email = this.f.email.value;
      this.loginUser.password = this.f.password.value;
      this.localSubscription =  this.authService.login(this.loginUser)
      .subscribe(
          () => {
              this.loading = false;
            if (this.authService.getRoleFromToken() === 'Vendor') {
                this.router.navigate(['/products/list'], { relativeTo: this.route.parent });
            } else if (this.authService.getRoleFromToken() === 'Admin') {
                  this.router.navigate(['/users/list'], { relativeTo: this.route.parent });
              }
              this.genToastrService.typeSuccess(`Success.`, 'Logged in successfully');
          },
          error => {
              this.loading = false;
              if (error.error) {
                  this.genToastrService.typeWarning(`${error.error.error}.` , 'error');
              }
          });
    }
  }

  ngOnDestroy() {
    this.localSubscription?.unsubscribe();
  }

  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }

  // On registration link click
  onRegister() {
    this.router.navigate(['register'], { relativeTo: this.route.parent });
  }
}
