import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormStepComponent } from './address-form-step.component';

describe('AddressFormStepComponent', () => {
  let component: AddressFormStepComponent;
  let fixture: ComponentFixture<AddressFormStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFormStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
