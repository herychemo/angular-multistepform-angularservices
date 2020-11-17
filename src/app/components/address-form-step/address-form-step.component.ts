import { Component, OnInit } from '@angular/core';
import {UserFormDomainService} from '../../services/user-form-domain.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserFormModel} from '../../model/domain/user-form-model';

@Component({
  selector: 'app-address-form-step',
  templateUrl: './address-form-step.component.html',
  styleUrls: ['./address-form-step.component.css']
})
export class AddressFormStepComponent implements OnInit {

  get userFormModel(): UserFormModel {
    return this.userFormDomainServiceService.model;
  }

  constructor(
    public userFormDomainServiceService: UserFormDomainService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {}

  goNext(): void {
    this.router.navigate(['..', 'topics'], { relativeTo: this.route});
  }

}
