import { Component, OnInit, Input } from '@angular/core';
import { UserFormDomainServiceService } from '../../../services/user-form-domain-service.service';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.css']
})
export class FormStatusComponent implements OnInit {

  @Input()
  currentStep: number;

  get totalSteps(): number {
    return this.userFormDomainServiceService.totalSteps;
  }

  get steps(): number[] {
    return Array(this.totalSteps)
      .fill(0)
      .map((value, index) => index + 1);
  }

  constructor(
    private userFormDomainServiceService: UserFormDomainServiceService
  ) { }
  ngOnInit(): void {}

}
