import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// Services

// Models
import { IPage, IResponse } from "./base.model";

// Helpers

import { environment } from "environments/environment";

export abstract class BaseService {

  protected constructor() { }

  protected getBaseUrl(): string {
    return environment.apiUrl;
  }
}

@Injectable()
export abstract class CrudBaseService<T> extends BaseService {

  uri: string;

  constructor(protected http: HttpClient) {
    super();
  }

  getURI(): string {
    return this.getBaseUrl() + this.uri;
  }

  findOne(id: string): Observable<IResponse<T>> {
    let url = `${this.getURI()}/${id}`;
    return this.http.get<IResponse<T>>(url);
  }

  create(data: T): Observable<IResponse<T>> {
    return this.http.post<IResponse<T>>(this.getURI(), data);
  }

  update(data: T, id: string): Observable<IResponse<T>> {
    let url = `${this.getURI()}/${id}`;
    return this.http.put<IResponse<T>>(url, data);
  }

  delete(id: string): Observable<any> {
    let url = `${this.getURI()}/${id}`;
    return this.http.delete<any>(url);
  }

  softDelete(id: string): Observable<any> {
    let url = `${this.getURI()}/${id}`
    return this.http.delete(url);
  }

  findAll(): Observable<IResponse<IPage<T>>> {
    let url = this.getURI();
    return this.http.get<IResponse<IPage<T>>>(url);
  }

  findAllPagination(page: number, size: number, deleted?: boolean): Observable<IResponse<IPage<T>>> {
    let url = this.getURI();
    if (deleted == true)
      return this.http.get<IResponse<IPage<T>>>(`${url}?page=${page}&size=${size}&deleted=${deleted}`);
    return this.http.get<IResponse<IPage<T>>>(`${url}?page=${page}&size=${size}`);
  }

  createWithFromData(data: T, files): Observable<IResponse<T>> {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file, file.originalname);
    });
    formData.append('data', JSON.stringify(data));
    return this.http.post<IResponse<T>>(this.getURI(), formData);
  }

  updateWithFromData(data: T, files, id: string): Observable<IResponse<T>> {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file, file.originalname);
    });
    formData.append('data', JSON.stringify(data));
    let url = `${this.getURI()}/${id}`;
    return this.http.put<IResponse<T>>(url, formData);
  }

  findByParams(params: Map<Object, Object>): Observable<IResponse<IPage<T>>> {
    let httpParams = new HttpParams();
    params.forEach((value, key) => {
      httpParams = httpParams.append(key.toString(), value.toString());
    });
    return this.http.get<IResponse<IPage<T>>>(`${this.getURI()}`, { params: httpParams });
  }
}