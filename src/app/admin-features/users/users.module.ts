import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'app/shared/shared.module';

// Components
import { UserListComponent } from './pages/user-list/user-list.component';
import { CreateUpdateUserComponent } from './pages/create-update-user/create-update-user.component';
import { DetailsUserComponent } from './pages/details-user/details-user.component';

// Services
import { UsersService } from 'app/core/services/users.service';


@NgModule({
  declarations: [
    UserListComponent,
    CreateUpdateUserComponent,
    DetailsUserComponent
  ],
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  providers: [
    // Services
    UsersService
  ]
})
export class UsersModule { }
