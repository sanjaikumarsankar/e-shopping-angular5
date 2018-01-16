import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AppStore } from '../../store/models/shopping-store.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
