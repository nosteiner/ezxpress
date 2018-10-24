import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdeliveredComponent } from './orderdelivered.component';

describe('OrderdeliveredComponent', () => {
  let component: OrderdeliveredComponent;
  let fixture: ComponentFixture<OrderdeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
