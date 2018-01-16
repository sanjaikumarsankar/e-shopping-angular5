import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/shopping-store.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private subscription: Subscription;

  private  cms: any;

  constructor(private store: Store<AppStore>) {
    this.subscription = this.store.subscribe((stores: AppStore) => {
      this.cms = stores.cms.cms;
    });
  }

  ngOnInit() {
  }

}
