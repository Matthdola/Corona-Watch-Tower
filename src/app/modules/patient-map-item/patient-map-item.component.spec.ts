import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMapItemComponent } from './patient-map-item.component';

describe('PatientMapItemComponent', () => {
  let component: PatientMapItemComponent;
  let fixture: ComponentFixture<PatientMapItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMapItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
