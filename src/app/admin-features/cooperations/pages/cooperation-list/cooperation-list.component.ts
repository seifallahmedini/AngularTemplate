import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPage, IResponse } from 'app/core/base/base.model';
import { Subscription } from 'rxjs';
import { Cooperation } from '../../models/Cooperation.model';
import { CooperationsService } from '../../services/cooperations.service';

@Component({
  selector: 'app-cooperation-list',
  templateUrl: './cooperation-list.component.html',
  styleUrls: ['./cooperation-list.component.scss']
})
export class CooperationListComponent implements OnInit, OnDestroy {
  cooperationsList = [];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  previousPage: number;
  itemsPerPage: number = 10;
  page: number = 0;
  subscription: Subscription;

  filterBySenderEmail: string = "";
  filterByReceiverEmail: string = "";
  filterByStatus: string = "0";

  constructor(
    private cooperationsService: CooperationsService,
    private router: Router) { }

  ngOnInit(): void {
    this.initData(0, 10);
  }

  initData(page?: number, size?: number, requestStatus?: string, senderEmail?: string, receiverEmail?: string,): void {
    this.cooperationsList = [];
    const params = new Map<string, Object>();
    params.set("page", page);
    params.set("size", size);
    if (requestStatus) {
      params.set("requestStatus", requestStatus);
    }
    if (senderEmail) {
      params.set("senderEmail", senderEmail);
    }
    if (receiverEmail) {
      params.set("receiverEmail", receiverEmail);
    }
    this.subscription = this.cooperationsService.findByParams(params).subscribe((result: IResponse<IPage<Cooperation>>) => {
      this.totalItems = result.data.totalItems;
      this.currentPage = result.data.currentPage;
      this.totalPages = result.data.totalPages;
      this.cooperationsList = result.data.docs;
    });
  }

  detailsCooperationRequest(sender: string) {
    this.router.navigate(["/cooperations", 'details', sender]);
  }

  onPaginatorChange(page: number) {
    const params = new Map<string, Object>();
    params.set("page", page - 1);
    params.set("size", this.itemsPerPage);
    this.previousPage = page;
    this.cooperationsService.findByParams(params).subscribe((result: IResponse<IPage<Cooperation>>) => {
      this.totalItems = result.data.totalItems;
      this.currentPage = result.data.currentPage;
      this.totalPages = result.data.totalPages;
      this.cooperationsList = result.data.docs;
    });
  }

  changeStatus(value: string) {
    this.filterByStatus = value;
    if (value == "0")
      this.initData(0, 10, null, null, null);
    if (value == "1")
      this.initData(0, 10, "pending", null, null);
    if (value == "2")
      this.initData(0, 10, "rejected", null, null);
    if (value == "3")
      this.initData(0, 10, "accepted", null, null);
    if (value == "4")
      this.initData(0, 10, "expired", null, null);
  }

  filterBySenderEmailFn() {
    if (this.filterByStatus == "0")
      this.initData(0, 10, null, this.filterBySenderEmail, null);
    if (this.filterByStatus == "1")
      this.initData(0, 10, "pending", this.filterBySenderEmail, null);
    if (this.filterByStatus == "2")
      this.initData(0, 10, "rejected", this.filterBySenderEmail, null);
    if (this.filterByStatus == "3")
      this.initData(0, 10, "accepted", this.filterBySenderEmail, null);
    if (this.filterByStatus == "4")
      this.initData(0, 10, "expired", this.filterBySenderEmail, null);
  }

  filterByReceiverEmailFn() {
    if (this.filterByStatus == "0")
      this.initData(0, 10, null, null, this.filterByReceiverEmail);
    if (this.filterByStatus == "1")
      this.initData(0, 10, "pending", null, this.filterByReceiverEmail);
    if (this.filterByStatus == "2")
      this.initData(0, 10, "rejected", null, this.filterByReceiverEmail);
    if (this.filterByStatus == "3")
      this.initData(0, 10, "accepted", null, this.filterByReceiverEmail);
    if (this.filterByStatus == "4")
      this.initData(0, 10, "expired", null, this.filterByReceiverEmail);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
