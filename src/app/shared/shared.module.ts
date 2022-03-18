import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgSelectModule } from '@ng-select/ng-select';

//COMPONENTS
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CustomizerComponent } from './customizer/customizer.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { ValidatioFormComponent } from './forms/validatio-form/validatio-form.component';
import { InputTextComponent } from './forms/input-text/input-text.component';
import { InputNumberComponent } from './forms/input-number/input-number.component';
import { InputSelectComponent } from './forms/input-select/input-select.component';
import { InputDateComponent } from './forms/input-date/input-date.component';
import { InputSwitchComponent } from './forms/input-switch/input-switch.component';
import { InputFileComponent } from './forms/input-file/input-file.component';
import { InputUrlComponent } from './forms/input-url/input-url.component';
import { SharedProductListComponent } from './components/shared-product-list/shared-product-list.component';

//DIRECTIVES
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { SidebarDirective } from './directives/sidebar.directive';
import { SidebarLinkDirective } from './directives/sidebarlink.directive';
import { SidebarListDirective } from './directives/sidebarlist.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebaranchortoggle.directive';
import { SidebarToggleDirective } from './directives/sidebartoggle.directive';

// Services
import { GENToastrService } from './services/toastr.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductsService } from 'app/vendor-features/products/services/products.service';

const COMPONENTS = [
    InputTextComponent,
    ValidatioFormComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizerComponent,
    NotificationSidebarComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputDateComponent,
    InputSwitchComponent,
    InputFileComponent,
    InputUrlComponent,
    SharedProductListComponent
];

const NG_MODULES = [
    NgSelectModule,
    UiSwitchModule,
    PerfectScrollbarModule,
    NgxSpinnerModule
];

const DIRECTIVES = [
    ToggleFullscreenDirective,
    SidebarDirective,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective,
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule,
        NG_MODULES
    ],
    exports: [
        CommonModule,
        NgbModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule,
        DIRECTIVES,
        NG_MODULES,
        COMPONENTS
    ],
    declarations: [
        DIRECTIVES,
        COMPONENTS
    ],
    providers: [
        // Services
        GENToastrService,
        ProductsService
    ]
})
export class SharedModule { }
