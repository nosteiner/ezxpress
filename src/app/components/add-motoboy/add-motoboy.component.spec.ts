import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotoboyComponent } from './add-motoboy.component';

describe('AddMotoboyComponent', () => {
  let component: AddMotoboyComponent;
  let fixture: ComponentFixture<AddMotoboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMotoboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMotoboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
