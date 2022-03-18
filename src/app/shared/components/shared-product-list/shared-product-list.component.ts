import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPage, IResponse } from 'app/core/base/base.model';
import { Product } from 'app/vendor-features/products/models/product.model';
import { ProductsService } from 'app/vendor-features/products/services/products.service';
import { GENToastrService } from 'app/shared/services/toastr.service';
import swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-shared-product-list',
  templateUrl: './shared-product-list.component.html',
  styleUrls: ['./shared-product-list.component.scss']
})
export class SharedProductListComponent implements OnDestroy, OnChanges {

  // Inputs
  @Input() filter: string = "false";
  @Input() productStatus: string = "";

  product_list = [];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  previousPage: number;
  itemsPerPage: number = 10;
  page: number = 0;
  subscription: Subscription;
  serverAddress = environment.serverAddress;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private toastrService: GENToastrService
  ) {
    console.log("shared----------------");

  }

  ngOnChanges() {

    this.initData(0, 10, this.filter, this.productStatus);
  }

  initData(page?: number, size?: number, mine?: string, productStatus?: string): void {
    this.product_list = [];
    const params = new Map<string, Object>();
    params.set("page", page);
    params.set("size", size);
    if (mine == "true") {
      params.set("mine", mine);
    }
    if (productStatus) {
      params.set("productStatus", productStatus);
    }
    this.subscription = this.productsService.findByParams(params).subscribe((result: IResponse<IPage<Product>>) => {
      this.totalItems = result.data.totalItems;
      this.currentPage = result.data.currentPage;
      this.totalPages = result.data.totalPages;
      this.product_list = result.data.docs;
    });
  }

  showProductDetails(id) {
    this.router.navigate(['/update/' + id]);
  }

  deleteProduct(id) {
    swal.fire({
      title: 'Are you sure ?',
      text: "You can't go back !",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove this !',
    }).then(async (result) => {
      if (result.value) {
        this.productsService.softDelete(id).subscribe((result: IResponse<Product>) => {
          swal.fire(
            'Removed !',
            'Product has been deleted.',
            'success'
          );
          this.productsService.findAllPagination(this.currentPage, this.itemsPerPage).subscribe((result: IResponse<IPage<Product>>) => {
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
      this.initData(page - 1, 10, this.filter, this.productStatus);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
