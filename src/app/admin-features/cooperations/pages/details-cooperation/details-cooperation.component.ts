import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// Sercices
import { GENToastrService } from 'app/shared/services/toastr.service';
import { CooperationsService } from '../../services/cooperations.service';

// Models
import { GENDER_LIST, User } from 'app/core/models/user.model';
import { ROLE_LIST } from 'app/core/enum/role.enum';
import { IResponse } from 'app/core/base/base.model';

import { environment } from 'environments/environment';
import { Cooperation } from '../../models/Cooperation.model';
import { Product } from 'app/vendor-features/products/models/product.model';
import { Image } from '@ks89/angular-modal-gallery';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-details-cooperation',
  templateUrl: './details-cooperation.component.html',
  styleUrls: ['./details-cooperation.component.scss']
})
export class DetailsCooperationComponent implements OnInit {
  id: string = null;
  public closeResult: string;
  public counter = 1;
  senderForm: FormGroup;
  receiverForm: FormGroup;
  subscription: Subscription;
  product: Product = {} as Product;
  sender: User = {} as User;
  senderUrlImage: string;
  receiver: User = {} as User;
  receiverUrlImage: string;
  roleList = ROLE_LIST;
  genderList = GENDER_LIST;
  public imagesRect: Image[] = [];

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private cooperationsService: CooperationsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: GENToastrService) {

    this.subscription = this.activatedRoute.params.pipe(mergeMap((params) => {
      if (params["id"]) {
        this.id = params["id"];
        return this.cooperationsService.findOne(this.id);
      }
      return of(null);
    })).subscribe((res: IResponse<Cooperation>) => {
      if (!res && this.id) {
        this.back();
        return;
      }
      if (res) {
        this.product = res.data.product;
        let images = res.data.product.images;
        for (var i = 0; i < images.length; i++) {
          let src = environment.serverAddress + images[i].imageLocation + "/" + images[i].imageName
          this.imagesRect.push(new Image(i, { img: src }, { img: src }))

        }
        console.log(this.imagesRect);

        this.sender = res.data.sender;
        this.senderUrlImage = environment.serverAddress + this.sender?.image.imageLocation + '/' + this.sender?.image.imageName;

        this.receiver = res.data.receiver;
        this.receiverUrlImage = environment.serverAddress + this.receiver?.image.imageLocation + '/' + this.receiver?.image.imageName;


        this.toastrService.typeSuccess(res.status, 'Success !');
      }
    },
      (_) => {
        this.back();
      });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  ngOnInit() {

  }

  back(): void {
    this.router.navigate(["/cooperations/list"]);
  }

}
