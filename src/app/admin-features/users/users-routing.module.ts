import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUpdateUserComponent } from './pages/create-update-user/create-update-user.component';
import { DetailsUserComponent } from './pages/details-user/details-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: UserListComponent,
                data: {
                    title: 'Users List'
                }
            },
            {
                path: 'details/:id',
                component: DetailsUserComponent,
                data: {
                    title: 'User details'
                }
            },
            {
                path: 'create',
                component: CreateUpdateUserComponent,
                data: {
                    title: 'Create user'
                }
            },
            {
                path: 'update/:id',
                component: CreateUpdateUserComponent,
                data: {
                    title: 'Update user'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }
