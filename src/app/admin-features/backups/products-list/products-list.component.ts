import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPage, IResponse } from 'app/core/base/base.model';
import { GENToastrService } from 'app/shared/services/toastr.service';
import { Product } from 'app/vendor-features/products/models/product.model';
import { ProductsService } from 'app/vendor-features/products/services/products.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {


  product_list = [];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  previousPage: number;
  itemsPerPage: number = 6;
  page: number = 0;
  subscription: Subscription;

  filterByStatus: string = "";
  filterByProductName: string = "";
  serverAddress = environment.serverAddress;

  constructor(private productsService: ProductsService, private router: Router, private toastrService: GENToastrService) { }

  ngOnInit(): void {
    this.initData(this.page, this.itemsPerPage);
  }

  initData(page?: number, size?: number, productStatus?: string, productName?: string): void {
    this.product_list = [];
    const params = new Map<string, Object>();
    params.set("page", page);
    params.set("size", size);
    params.set("deleted", true);
    if (productStatus) {
      params.set("productStatus", productStatus);
    }
    if (productName) {
      params.set("productName", productName);
    }
    this.subscription = this.productsService.findByParams(params).subscribe((result: IResponse<IPage<Product>>) => {
      this.totalItems = result.data.totalItems;
      this.currentPage = result.data.currentPage;
      this.totalPages = result.data.totalPages;
      this.product_list = result.data.docs;
    });
  }

  restoreProduct(id: string) {
    Swal.fire({
      title: 'Are you sure ?',
      text: "You want to restore this product !",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, restore this !',
    }).then(async (result) => {
      if (result.value) {
        this.productsService.restoreProduct(id).subscribe((result: IResponse<Product>) => {
          Swal.fire(
            'Restored !',
            'Product has been restored.',
            'success'
          );
          this.subscription = this.productsService.findAllPagination(this.currentPage, this.itemsPerPage, true).subscribe((result: IResponse<IPage<Product>>) => {
            this.totalItems = result.data.totalItems;
            this.currentPage = result.data.currentPage;
            this.totalPages = result.data.totalPages;
            this.product_list = result.data.docs;
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
      this.initData(page - 1, this.itemsPerPage, this.filterByStatus, this.filterByProductName);
    }
  }

  changeStatus(value: string) {
    if (value == "0")
      this.filterByStatus = "";
    if (value == "1")
      this.filterByStatus = "review";
    if (value == "2")
      this.filterByStatus = "rejected";
    if (value == "3")
      this.filterByStatus = "approved";
    if (value == "4")
      this.filterByStatus = "expired";
    this.initData(0, this.itemsPerPage, this.filterByStatus, this.filterByProductName);
  }

  filterByProductNameFn() {
    this.initData(0, this.itemsPerPage, this.filterByStatus, this.filterByProductName);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
