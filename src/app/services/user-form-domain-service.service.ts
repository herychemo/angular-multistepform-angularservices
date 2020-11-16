import { Injectable } from '@angular/core';
import { UserFormModel } from '../model/domain/user-form-model';

@Injectable({
  providedIn: 'root'
})
export class UserFormDomainServiceService {

  model: UserFormModel;
  readonly totalSteps: number;

  constructor() {
    this.totalSteps = 3;
    this.model = {
      userModel: {} as any,
      addressModel: {} as any,
      topicsModel: {} as any,
    };
  }
}
