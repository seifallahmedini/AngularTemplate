import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// Sercices
import { UsersService } from 'app/core/services/users.service';
import { GENToastrService } from 'app/shared/services/toastr.service';

// Models
import { GENDER_LIST, User } from 'app/core/models/user.model';
import { Role, ROLE_LIST } from 'app/core/enum/role.enum';
import { IResponse } from 'app/core/base/base.model';

// Helpers
import { environment } from 'environments/environment';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.scss']
})
export class CreateUpdateUserComponent implements OnInit, OnDestroy {

  id: string = null;
  userForm: FormGroup;
  isSubmitted: boolean = false;
  subscription: Subscription;
  user: User = null;
  roleList = ROLE_LIST.filter((role) => role.code !== Role.Vendor);
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
        this.router.navigate(["/users/list"]);
        return;
      }
      if (res) {
        this.user = res.data;
        this.toastrService.typeSuccess(res.status, 'Success !');
        this.patchForm(this.user);
      }
    },
      (_) => {
        this.router.navigate(["/users/list"]);
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

  onSaveClick(): void {
    this.isSubmitted = true;
    if (this.userForm.valid) {
      if (!this.user) {
        const dataToSend: User = { ...this.userForm.value };
        delete dataToSend.image;
        delete dataToSend._id;
        this.subscription = this.usersService.createWithFromData(dataToSend, [this.userForm.get("image").value]).subscribe((res: IResponse<User>) => {
          this.toastrService.typeSuccess(res.status, 'Success !');
        });
      } else {
        this.user = { ...this.userForm.value };
        console.log(typeof (this.userForm.get("image").value[0]) == 'string');

        this.subscription = this.usersService.updateWithFromData(this.user, typeof (this.userForm.get("image").value[0]) != 'string' ? [this.userForm.get("image").value] : [], this.user._id).subscribe((res: IResponse<User>) => {
          this.toastrService.typeSuccess(res.status, 'Success !');
          this.user = res.data;
          this.patchForm(this.user);
        });
      }
    }
  }

  onCancelClick(): void {
    if (this.user) {
      this.patchForm(this.user);
    } else {
      this.userForm.reset();
    }
  }

  back(): void {
    this.router.navigate(["/users/list"]);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
