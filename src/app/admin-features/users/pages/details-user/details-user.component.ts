import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// Sercices
import { UsersService } from 'app/core/services/users.service';

// Models
import { GENDER_LIST, User } from 'app/core/models/user.model';
import { ROLE_LIST } from 'app/core/enum/role.enum';
import { IResponse } from 'app/core/base/base.model';

import { environment } from 'environments/environment';
import { GENToastrService } from 'app/shared/services/toastr.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {

  id: string = null;
  userForm: FormGroup;
  subscription: Subscription;
  user: User = {} as User;
  roleList = ROLE_LIST;
  genderList = GENDER_LIST;

  constructor(private formBuilder: FormBuilder,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: GENToastrService) {
  }

  get f() { return this.userForm.controls; }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      _id: [null],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      userName: [null, [Validators.required]],
      birthday: [null, Validators.required],
      address: [null, [Validators.required]],
      country: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      role: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      status: [null, [Validators.required]],
      image: [null]
    });

    this.subscription = this.activatedRoute.params.pipe(mergeMap((params) => {
      if (params["id"]) {
        this.id = params["id"];
        return this.usersService.findOne(this.id);
      }
      return of(null);
    })).subscribe((res: IResponse<User>) => {
      if (!res && this.id) {
        this.back();
        return;
      }
      if (res) {
        this.user = res.data;
        this.toastrService.typeSuccess(res.status, 'Success !');
        this.patchForm(this.user);
      }
    },
      (_) => {
        this.back();
      });
  }


  patchForm(user: User): void {
    const urlImage: string = environment.serverAddress + user?.image?.imageLocation + '/' + user?.image?.imageName;
    this.userForm.patchValue({
      _id: user?._id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      userName: user?.userName,
      birthday: user?.birthday,
      address: user?.address,
      country: user?.country,
      gender: user?.gender,
      role: user?.role,
      phoneNumber: user?.phoneNumber,
      status: user?.status,
      image: urlImage
    });
  }

  back(): void {
    this.router.navigate(["/users/list"]);
  }
}
