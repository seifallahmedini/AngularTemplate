import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BackupsRoutingModule } from './backups-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { UsersService } from 'app/core/services/users.service';



@NgModule({
  declarations: [
    UsersListComponent,
    VendorsListComponent,
    ProductsListComponent
  ],
  imports: [
    BackupsRoutingModule,
    SharedModule
  ],
  providers: [
    // Services
    UsersService
  ]

})
export class BackupsModule { }
