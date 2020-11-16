import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormStepComponent } from './components/user-form-step/user-form-step.component';
import { AddressFormStepComponent } from './components/address-form-step/address-form-step.component';
import { TopicsFormStepComponent } from './components/topics-form-step/topics-form-step.component';
import { FormResultComponent } from './components/form-result/form-result.component';

const routes: Routes = [
  {
    path: 'form/user',
    component: UserFormStepComponent
  },
  {
    path: 'form/address',
    component: AddressFormStepComponent
  },
  {
    path: 'form/topics',
    component: TopicsFormStepComponent
  },
  {
    path: 'form/result',
    component: FormResultComponent
  },
  {
    path: '',
    redirectTo: 'form/user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'form/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
