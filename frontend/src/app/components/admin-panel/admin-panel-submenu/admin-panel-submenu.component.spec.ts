import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelSubmenuComponent } from './admin-panel-submenu.component';

describe('AdminPanelSubmenuComponent', () => {
  let component: AdminPanelSubmenuComponent;
  let fixture: ComponentFixture<AdminPanelSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
