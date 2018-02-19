import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormFieldComponent } from './edit-form-field.component';

describe('EditFormFieldComponent', () => {
  let component: EditFormFieldComponent;
  let fixture: ComponentFixture<EditFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
