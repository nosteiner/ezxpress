import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoShareLiveLocationComponent } from './moto-share-live-location.component';

describe('MotoShareLiveLocationComponent', () => {
  let component: MotoShareLiveLocationComponent;
  let fixture: ComponentFixture<MotoShareLiveLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoShareLiveLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoShareLiveLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
