import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-list-right-sidebar',
  templateUrl: './product-list-right-sidebar.component.html',
  styleUrls: ['./product-list-right-sidebar.component.css']
})
export class ProductListRightSidebarComponent  implements OnChanges {

  @Input()
  private products: any;

  private productDetails: any;

  constructor() { }

  ngOnChanges() {
    if (this.products && this.products.data) {
      this.productDetails = this.products.data.products.productsDetails;
    }
  }

}
