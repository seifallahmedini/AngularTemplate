import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() type: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() role: string;
  @Input() birthday: string;
  @Input() phoneNumber: string;
  @Input() address: string;
  @Input() imageUrl: string;
  @Input() status: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
