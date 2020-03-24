import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartitionGeoComponent } from './repartition-geo.component';

describe('RepartitionGeoComponent', () => {
  let component: RepartitionGeoComponent;
  let fixture: ComponentFixture<RepartitionGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartitionGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartitionGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
