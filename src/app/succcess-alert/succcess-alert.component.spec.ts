import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucccessAlertComponent } from './succcess-alert.component';

describe('SucccessAlertComponent', () => {
  let component: SucccessAlertComponent;
  let fixture: ComponentFixture<SucccessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucccessAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucccessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
