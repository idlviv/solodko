import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsManagementSubmenuComponent } from './products-management-submenu.component';

describe('ProductsManagementSubmenuComponent', () => {
  let component: ProductsManagementSubmenuComponent;
  let fixture: ComponentFixture<ProductsManagementSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsManagementSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsManagementSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
