import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpValidateComponent } from './otp-validate.component';

describe('OtpValidateComponent', () => {
  let component: OtpValidateComponent;
  let fixture: ComponentFixture<OtpValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
