import { CMS } from './cms.model';
import { Products } from './products.model';

export interface AppStore {
    cms: CMS;
    products: Products;
}

