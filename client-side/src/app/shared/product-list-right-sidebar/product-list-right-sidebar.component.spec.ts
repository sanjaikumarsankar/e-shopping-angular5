import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListRightSidebarComponent } from './product-list-right-sidebar.component';

describe('ProductListRightSidebarComponent', () => {
  let component: ProductListRightSidebarComponent;
  let fixture: ComponentFixture<ProductListRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
