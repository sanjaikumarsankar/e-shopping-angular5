
import { ActionReducer, Action } from '@ngrx/store';
import { Products } from '../models/products.model';
import { ProductsAction } from '../actions/products.action';

export const LOAD_PRODUCTS_DATA = 'LOAD_PRODUCTS_DATA'; // Load CMS Data
/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function productsReducer(state: Products = {test: undefined}, action: ProductsAction): Products {
    switch (action.type) {
        case LOAD_PRODUCTS_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
