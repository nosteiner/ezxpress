import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgsnackComponent } from './msgsnack.component';

describe('MsgsnackComponent', () => {
  let component: MsgsnackComponent;
  let fixture: ComponentFixture<MsgsnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgsnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgsnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
