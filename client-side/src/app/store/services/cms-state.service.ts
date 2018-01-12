import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppStore } from '../../store/models/shopping-store.model';

@Injectable()
export class CmsStateService {

  constructor(public store: Store<AppStore>) {
  }

  /**
   * Fetches CMS data.
   */
  private test = {
    'test': 'test'
  };

  public loadCMS() {
   // this.store.dispatch({type: 'LOAD_CMS_DATA', payload: this.test });
    return this.test;
  }

}
