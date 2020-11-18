import { Component, OnInit } from '@angular/core';
import {UserFormDomainService} from '../../services/user-form-domain.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserFormModel} from '../../model/domain/user-form-model';

@Component({
  selector: 'app-user-form-step',
  templateUrl: './user-form-step.component.html',
  styleUrls: ['./user-form-step.component.css']
})
export class UserFormStepComponent implements OnInit {

  get userFormModel(): UserFormModel {
    return this.userFormDomainService.model;
  }

  constructor(
    private userFormDomainService: UserFormDomainService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {}

  goNext(): void {
    this.router.navigate(['..', 'address'], { relativeTo: this.route});
  }

}
