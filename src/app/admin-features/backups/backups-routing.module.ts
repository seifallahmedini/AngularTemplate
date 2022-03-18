import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'users/list',
                component: UsersListComponent,
                data: {
                    title: 'Users backup list'
                }
            },
            {
                path: 'vendors/list',
                component: VendorsListComponent,
                data: {
                    title: 'Vendors backup list'
                }
            },
            {
                path: 'products/list',
                component: ProductsListComponent,
                data: {
                    title: 'Products backup list'
                }
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BackupsRoutingModule { }
