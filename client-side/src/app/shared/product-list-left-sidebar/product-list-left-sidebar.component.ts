import { Component, OnChanges, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-product-list-left-sidebar',
  templateUrl: './product-list-left-sidebar.component.html',
  styleUrls: ['./product-list-left-sidebar.component.css']
})
export class ProductListLeftSidebarComponent implements OnChanges  {

  @Input()
  private products: any;

  private productList: any;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnChanges() {
    if (this.products && this.products.data) {
      this.productList = this.products.data.products.productList;
    }
  }

  public expandCollapse(index) {
    if (this.el.nativeElement.querySelector('.index-' + index + '.collapse')) {
      this.renderer.setElementClass(this.el.nativeElement.querySelector('.index-' + index), 'collapse', false);
      this.renderer.setElementClass(this.el.nativeElement.querySelector('.index-' + index), 'expand', true);
    } else {
      this.renderer.setElementClass(this.el.nativeElement.querySelector('.index-' + index), 'collapse', true);
      this.renderer.setElementClass(this.el.nativeElement.querySelector('.index-' + index), 'expand', false);
    }
  }

}
