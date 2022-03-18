import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

// Services
import { BaseService } from '../base/base.service';
import { Role } from '../enum/role.enum';

@Injectable()
export class AuthenticationService extends BaseService {

  baseUrl = this.getBaseUrl() + "auth";

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router) {
    super();

    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    this.currentUser = this.currentUserSubject.asObservable();

    // this.router.events.pipe(filter(event => event instanceof NavigationStart))
    //   .subscribe((data) => {
    //     if(this.isAuthenticated() && this.jwtIsExpired() && data['url'].indexOf("pages")===-1 ){
    //       this.router.navigate(['pages','login']);
    //     }
    // });
  }

  public get currentUserValue() {
    if (this.currentUserSubject.value) {
      this.currentUserSubject.value['token'] = localStorage.getItem('token').substring(8, (localStorage.getItem('token').length - 1))
      return this.currentUserSubject.value;
    }
    return null;
  }

  login(data: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, data)
      .pipe(map(result => {
        if (result && result.token) {
          localStorage.setItem('user', JSON.stringify(result["user"]));
          localStorage.setItem('token', JSON.stringify(result["token"]));
          this.currentUserSubject.next(result);
        }
        return result;
      }));
  }

  signUp(data: any) {
    let role = "";
    if (data.role == Role.Customer)
      role = "customer"
    if (data.role == Role.Vendor)
      role = "vendor"
    return this.http.post<any>(`${this.baseUrl}/signup/${role}`, data)
      .pipe(map(result => {
        return result;
      }));
  }

  jwtIsExpired() {
    if (this.currentUserValue) {
      let decoded = jwt_decode(this.currentUserValue['token']);
      if (decoded['exp'] === undefined) {
        return null;
      }
      const date = new Date(0);
      date.setUTCSeconds(decoded['exp']);
      return date.valueOf() <= new Date().valueOf();
    }
    return null;
  }

  getIdFromToken(): string {
    if (this.currentUserValue) {
      let decoded = jwt_decode(this.currentUserValue['token']);
      return decoded['userId'];
    }
    return null;
  }

  getRoleFromToken(): string {
    if (this.currentUserValue) {
      let decoded = jwt_decode(this.currentUserValue['token']);
      return decoded['role'];
    }
    return null;
  }

  isAuthenticated(): boolean {
    if (this.currentUserValue) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"]);
  }

  setValue(data: any) {
    this.currentUserSubject.next(data);
  }
  getUserFromToken() {
    if (this.currentUserValue) {
      return this.currentUserValue
    }
    return null;
  }

  // getImageFromToken():string{
  //   if(this.currentUserValue){
  //     let decoded=jwt_decode(this.currentUserValue['token']);
  //     return decoded['urlImage'];
  //   }
  //   return null;
  // }


}
