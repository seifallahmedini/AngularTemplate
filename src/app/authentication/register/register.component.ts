import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponse } from 'app/core/base/base.model';
import { Role, ROLE_LIST } from 'app/core/enum/role.enum';
import { GENDER_LIST, User } from 'app/core/models/user.model';
import { UsersService } from 'app/core/services/users.service';
import { AuthenticationService as AuthService } from 'app/core/services/authentication.service';
import { GENToastrService } from 'app/shared/services/toastr.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted: boolean = false;
  subscription: Subscription;
  user: User = null;
  roleList = ROLE_LIST.filter((role) => role.code !== Role.Admin);
  genderList = GENDER_LIST;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: GENToastrService) { }

  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      storeName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      birthday: [null, Validators.required],
      address: [null, [Validators.required]],
      country: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      role: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
    });
  }

  onRegisterClick(): void {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      this.loading = true;
      const dataToSend: User = { ...this.registerForm.value };
      this.subscription = this.authService.signUp(dataToSend).subscribe((res: IResponse<User>) => {
        this.loading = false;
        this.toastrService.typeSuccess(res.status, 'Registered successfully !');
        this.goToLogin();
      },
        error => {
          this.loading = false;
          if (error.error) {
            this.toastrService.typeWarning(`${error.error.error}.`, 'error');
          }
        });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
