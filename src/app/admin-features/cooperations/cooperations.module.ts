// Modules
import { NgModule } from '@angular/core';
import { CooperationsRoutingModule } from './cooperations-routing.module';
import { SharedModule } from 'app/shared/shared.module';

// Components
import { CooperationListComponent } from './pages/cooperation-list/cooperation-list.component';
import { DetailsCooperationComponent } from './pages/details-cooperation/details-cooperation.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import 'hammerjs';
import 'mousetrap';



@NgModule({
  declarations: [CooperationListComponent, DetailsCooperationComponent, UserInfoComponent],
  imports: [
    CooperationsRoutingModule,
    SharedModule,
    CKEditorModule,
    NgbModule,
    DropzoneModule,
    SharedModule,
    GalleryModule.forRoot(),
  ],
  exports: [UserInfoComponent]
})
export class CooperationsModule { }
