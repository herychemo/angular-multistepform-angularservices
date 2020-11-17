import { Component, OnInit } from '@angular/core';
import {UserFormDomainServiceService} from '../../services/user-form-domain-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserFormModel} from '../../model/domain/user-form-model';

@Component({
  selector: 'app-user-form-step',
  templateUrl: './user-form-step.component.html',
  styleUrls: ['./user-form-step.component.css']
})
export class UserFormStepComponent implements OnInit {

  get userFormModel(): UserFormModel {
    return this.userFormDomainServiceService.model;
  }

  constructor(
    public userFormDomainServiceService: UserFormDomainServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {}

  goNext(): void {
    this.router.navigate(['..', 'address'], { relativeTo: this.route});
  }

}
