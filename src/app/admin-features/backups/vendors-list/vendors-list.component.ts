import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPage, IResponse } from 'app/core/base/base.model';
import { User } from 'app/core/models/user.model';
import { UsersService } from 'app/core/services/users.service';
import { GENToastrService } from 'app/shared/services/toastr.service';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';


@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss']
})
export class VendorsListComponent implements OnInit {
  usersList = [];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  previousPage: number;
  itemsPerPage: number = 5;
  page: number = 0;
  subscription: Subscription;

  filterByFirstName: string = "";
  filterByLastName: string = "";
  filterByStatus: string = "";

  constructor(
    private usersService: UsersService,
    private toastrService: GENToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initData(this.page, this.itemsPerPage);
  }

  initData(page?: number, size?: number, userStatus?: string, firstName?: string, lastName?: string): void {
    this.usersList = [];
    const params = new Map<string, Object>();
    params.set("page", page);
    params.set("size", size);
    params.set("deleted", true);
    params.set("role", "Vendor");
    if (userStatus) {
      params.set("userStatus", userStatus);
    }
    if (firstName) {
      params.set("firstNameSearch", firstName);
    }
    if (lastName) {
      params.set("lastNameSearch", lastName);
    }

    this.subscription = this.usersService.findByParams(params).subscribe((result: IResponse<IPage<User>>) => {
      this.totalItems = result.data.totalItems;
      this.currentPage = result.data.currentPage;
      this.totalPages = result.data.totalPages;
      this.usersList = result.data.docs;
    });
  }

  restoreVendor(id: string) {
    const params = new Map<string, Object>();
    params.set("page", this.page);
    params.set("size", this.itemsPerPage);
    params.set("role", "Vendor");
    params.set("deleted", true);
    swal.fire({
      title: 'Are you sure ?',
      text: "You want to restore this user !",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, restore this !',
    }).then(async (result) => {
      if (result.value) {
        this.usersService.restoreUser(id).subscribe((result: IResponse<User>) => {
          swal.fire(
            'Restored !',
            'User has been restored.',
            'success'
          );
          this.subscription = this.usersService.findByParams(params).subscribe((result: IResponse<IPage<User>>) => {
            this.totalItems = result.data.totalItems;
            this.currentPage = result.data.currentPage;
            this.totalPages = result.data.totalPages;
            this.usersList = result.data.docs;
          });
        },
          (err) => {
            this.toastrService.typeError(err, 'back-end error');
          });
      }
    });
  }

  onPaginatorChange(page: number) {
    if (page !== this.previousPage) {
      const params = new Map<string, Object>();
      params.set("page", page - 1);
      params.set("size", this.itemsPerPage);
      params.set("role", "Vendor");
      params.set("deleted", true);
      this.previousPage = page;
      this.usersService.findByParams(params).subscribe((result: IResponse<IPage<User>>) => {
        this.totalItems = result.data.totalItems;
        this.currentPage = result.data.currentPage;
        this.totalPages = result.data.totalPages;
        this.usersList = result.data.docs;
      });
    }
  }

  changeStatus(value: string) {
    if (value == "0") {
      this.filterByStatus = "";
      this.initData(0, 10, null, this.filterByFirstName, this.filterByLastName);
    }
    if (value == "1") {
      this.filterByStatus = "true";
      this.initData(0, 10, "true", this.filterByFirstName, this.filterByLastName);
    }
    if (value == "2") {
      this.filterByStatus = "false";
      this.initData(0, 10, "false", this.filterByFirstName, this.filterByLastName);
    }
  }

  filterByFirstNameFn() {
    this.initData(0, 10, this.filterByStatus, this.filterByFirstName, this.filterByLastName);

  }

  filterByLastNameFn() {
    this.initData(0, 10, this.filterByStatus, this.filterByFirstName, this.filterByLastName);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
