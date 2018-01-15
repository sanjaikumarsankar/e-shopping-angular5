import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListLeftSidebarComponent } from './product-list-left-sidebar.component';

describe('ProductListLeftSidebarComponent', () => {
  let component: ProductListLeftSidebarComponent;
  let fixture: ComponentFixture<ProductListLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
