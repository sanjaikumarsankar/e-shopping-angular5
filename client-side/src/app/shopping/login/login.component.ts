import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/shopping-store.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
