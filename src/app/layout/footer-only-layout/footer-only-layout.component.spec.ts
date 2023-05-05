import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOnlyLayoutComponent } from './footer-only-layout.component';

describe('FooterOnlyLayoutComponent', () => {
  let component: FooterOnlyLayoutComponent;
  let fixture: ComponentFixture<FooterOnlyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterOnlyLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterOnlyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
