import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/models/shopping-store.model';

@Injectable()
export class ShoppingService {

  constructor(private http: Http, private store: Store<AppStore>) { }

  public getProductDetails() {
    return this.http.get('http://localhost:3000/products').subscribe(
      (data: any) =>
      this.store.dispatch({type: 'LOAD_PRODUCTS_DATA', payload: data.json()})
    );
    }
}
