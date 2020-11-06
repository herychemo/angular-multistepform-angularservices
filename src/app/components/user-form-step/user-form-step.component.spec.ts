import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormStepComponent } from './user-form-step.component';

describe('UserFormStepComponent', () => {
  let component: UserFormStepComponent;
  let fixture: ComponentFixture<UserFormStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
