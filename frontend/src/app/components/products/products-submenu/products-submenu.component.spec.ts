import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSubmenuComponent } from './products-submenu.component';

describe('ProductsSubmenuComponent', () => {
  let component: ProductsSubmenuComponent;
  let fixture: ComponentFixture<ProductsSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
