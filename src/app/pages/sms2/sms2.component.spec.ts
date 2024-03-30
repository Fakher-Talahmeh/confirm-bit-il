import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sms2Component } from './sms2.component';

describe('Sms2Component', () => {
  let component: Sms2Component;
  let fixture: ComponentFixture<Sms2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sms2Component]
    });
    fixture = TestBed.createComponent(Sms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
