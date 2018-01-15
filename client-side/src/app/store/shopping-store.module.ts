import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { AppStore } from './models/shopping-store.model';
import { cmsReducer } from './reducers/cms.reducer';
import { productsReducer } from './reducers/products.reducer.';
import { CmsStateService } from './services/cms-state.service';

export const rootReducer = {
  cms: cmsReducer,
  products: productsReducer
};


const productionReducer: ActionReducer<AppStore> = combineReducers(rootReducer);

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducer)
  ],
  declarations: []
})
export class ShoppingStoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShoppingStoreModule,
      providers: [ CmsStateService ]
    };
  }
}
