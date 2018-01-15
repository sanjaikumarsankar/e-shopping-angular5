import { CmsStateService } from '../store/services/cms-state.service';
import { ShoppingService } from './shopping.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';


export function startupServiceFactory(cmsStateService: CmsStateService, shoppingService: ShoppingService): Function {
  return () => {
   Observable.fromPromise(cmsStateService.loadCMS().then(() => {
    shoppingService.getProductDetails();
  }));
  };
}
