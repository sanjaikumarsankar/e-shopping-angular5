import { CmsStateService } from '../store/services/cms-state.service';
import { ShoppingService } from './shopping.service';



export function startupServiceFactory(cmsStateService: CmsStateService, shoppingService: ShoppingService): Function {
  return () => {
   cmsStateService.loadCMS();
   shoppingService.getProductDetails();
  };
}
