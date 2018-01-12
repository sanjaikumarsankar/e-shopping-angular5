
import { ActionReducer, Action } from '@ngrx/store';
import { CMS } from '../models/cms.model';

export const LOAD_CMS_DATA = 'LOAD_CMS_DATA'; // Load CMS Data
/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */
export function cmsReducer(state: CMS = {test: undefined}, action: Action): CMS {
    switch (action.type) {
        case LOAD_CMS_DATA:
            return Object.assign({}, state, action);
        default:
            return state;
    }
}
