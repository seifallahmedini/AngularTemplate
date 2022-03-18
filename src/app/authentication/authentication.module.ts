import { NgModule } from '@angular/core';

// Components
import { LoginComponent } from './login/login.component';

// Modules
import { SharedModule } from 'app/shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
