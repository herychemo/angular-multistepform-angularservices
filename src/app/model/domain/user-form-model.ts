import {UserModel} from './user-model';
import {AddressModel} from './address-model';
import {TopicsModel} from './topics-model';

export interface UserFormModel {
  userModel: UserModel;
  addressModel: AddressModel;
  topicsModel: TopicsModel;
}
