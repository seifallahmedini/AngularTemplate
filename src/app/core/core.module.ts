import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Interceptors
import { HttpCallInterceptorProvider } from './interceptors/http-call.interceptor';
import { JwtInterceptorProvider } from './interceptors/jwt.interceptor';

// Guards
import { AuthenticationGuard } from './guards/authentication.guard';
import { AdminGuard } from './guards/admin.guard';
import { VendorGuard } from './guards/vendor.guard';

// Services
import { WebsocketService } from './services/websocket.service';
import { StorageService } from './services/storage.service';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/users.service';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    // Guards
    AuthenticationGuard,
    AdminGuard,
    VendorGuard,
    // Interceptors
    HttpCallInterceptorProvider,
    JwtInterceptorProvider,

    // Services
    WebsocketService,
    AuthenticationService,
    StorageService,
    UsersService,
    LoadingService
  ]
})
export class CoreModule { }
