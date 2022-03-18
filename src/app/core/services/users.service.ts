import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudBaseService } from 'app/core/base/base.service';
import { User } from 'app/core/models/user.model';
import { IPage, IResponse } from '../base/base.model';

@Injectable()
export class UsersService extends CrudBaseService<User> {
  uri = 'users'

  //exemple 
  checkEmailNotTaken(email: string) {
    const url = this.getURI() + '/email/exist';
    return this.http.get(url);
  }

  updateUserStatus(id: string) {
    let url = `${this.getURI()}/status/${id}`;
    return this.http.put<IResponse<User>>(url, null);
  }

  restoreUser(id: string) {
    let url = `${this.getURI()}/restore/${id}`;
    return this.http.put<IResponse<User>>(url, null);
  }

  findAllWithProducts(params: Map<Object, Object>) {
    let url = `${this.getURI()}/with-products`;
    let httpParams = new HttpParams();
    params.forEach((value, key) => {
      httpParams = httpParams.append(key.toString(), value.toString());
    });
    return this.http.get<IResponse<IPage<User>>>(url, { params: httpParams });
  }
}
