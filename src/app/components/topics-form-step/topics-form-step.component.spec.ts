import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsFormStepComponent } from './topics-form-step.component';

describe('TopicsFormStepComponent', () => {
  let component: TopicsFormStepComponent;
  let fixture: ComponentFixture<TopicsFormStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsFormStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsFormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
