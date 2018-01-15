import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-left-sidebar',
  templateUrl: './product-list-left-sidebar.component.html',
  styleUrls: ['./product-list-left-sidebar.component.css']
})
export class ProductListLeftSidebarComponent implements OnInit {

  private toggle: string;

  constructor() { }

  ngOnInit() {
  }

  public expandCollapse() {
    if (this.toggle === 'collapse') {
      this.toggle = 'expand';
    } else {
      this.toggle = 'collapse';
    }
  }

}
