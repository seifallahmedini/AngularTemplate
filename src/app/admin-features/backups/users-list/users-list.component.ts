import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPage, IResponse } from 'app/core/base/base.model';
import { User } from 'app/core/models/user.model';
import { UsersService } from 'app/core/services/users.service';
import { GENToastrService } from 'app/shared/services/toastr.service';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
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
  filterByRole: string = "";

  constructor(
    private usersService: UsersService,
    private toastrService: GENToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initData(this.page, this.itemsPerPage);
  }

  initData(page?: number, size?: number, userStatus?: string, firstName?: string, lastName?: string, role?: string): void {
    this.usersList = [];
    const params = new Map<string, Object>();
    params.set("page", page);
    params.set("size", size);
    params.set("deleted", true);
    if (userStatus) {
      params.set("userStatus", userStatus);
    }
    if (firstName) {
      params.set("firstNameSearch", firstName);
    }
    if (lastName) {
      params.set("lastNameSearch", lastName);
    }
    if (role) {
      params.set("roleSearch", role);
    }
    this.subscription = this.usersService.findByParams(params).subscribe((result: IResponse<IPage<User>>) => {
      this.totalItems = result.data.totalItems;
      this.currentPage = result.data.currentPage;
      this.totalPages = result.data.totalPages;
      this.usersList = result.data.docs;
    });
  }

  restoreUser(id: string) {
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
          this.subscription = this.usersService.findAllPagination(this.currentPage, this.itemsPerPage, true).subscribe((result: IResponse<IPage<User>>) => {
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
      this.previousPage = page;
      this.usersService.findAllPagination(page - 1, this.itemsPerPage, true).subscribe((result: IResponse<IPage<User>>) => {
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
      this.initData(0, 10, null, this.filterByFirstName, this.filterByLastName, this.filterByRole);
    }
    if (value == "1") {
      this.filterByStatus = "true";
      this.initData(0, 10, "true", this.filterByFirstName, this.filterByLastName, this.filterByRole);
    }
    if (value == "2") {
      this.filterByStatus = "false";
      this.initData(0, 10, "false", this.filterByFirstName, this.filterByLastName, this.filterByRole);
    }
  }

  changeRole(value: string) {
    if (value == "0") {
      this.filterByRole = "";
      this.initData(0, 10, this.filterByStatus, this.filterByFirstName, this.filterByLastName, null);
    }
    if (value == "1") {
      this.filterByRole = "Customer";
      this.initData(0, 10, this.filterByStatus, this.filterByFirstName, this.filterByLastName, "Customer");
    }
    if (value == "2") {
      this.filterByRole = "Admin";
      this.initData(0, 10, this.filterByStatus, this.filterByFirstName, this.filterByLastName, "Admin");
    }
    if (value == "3") {
      this.filterByRole = "Vendor";
      this.initData(0, 10, this.filterByStatus, this.filterByFirstName, this.filterByLastName, "Vendor");
    }

  }

  filterByFirstNameFn() {
    this.initData(0, 10, this.filterByStatus, this.filterByFirstName, this.filterByLastName, this.filterByRole);
  }

  filterByLastNameFn() {
    this.initData(0, 10, this.filterByStatus, this.filterByFirstName, this.filterByLastName, this.filterByRole);
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
