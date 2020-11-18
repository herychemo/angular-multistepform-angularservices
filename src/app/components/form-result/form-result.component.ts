import { Component, OnInit } from '@angular/core';
import {UserFormDomainService} from '../../services/user-form-domain.service';
import {UserFormModel} from '../../model/domain/user-form-model';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.css']
})
export class FormResultComponent implements OnInit {

  get userFormModel(): UserFormModel {
    return this.userFormDomainService.model;
  }

  constructor(
    private userFormDomainService: UserFormDomainService
  ) { }
  ngOnInit(): void {}

}
