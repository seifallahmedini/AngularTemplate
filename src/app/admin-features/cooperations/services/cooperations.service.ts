import { Injectable } from '@angular/core';
import { CrudBaseService } from 'app/core/base/base.service';
import { Cooperation } from '../models/Cooperation.model';

@Injectable({
  providedIn: 'root'
})
export class CooperationsService extends CrudBaseService<Cooperation>  {
  uri = 'requests'
}
