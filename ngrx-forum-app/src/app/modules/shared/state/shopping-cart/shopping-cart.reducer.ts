import { combineReducers, createReducer, on } from '@ngrx/store';
import { CartState } from './shopping-cart.state';
// import * as CartActions from './shopping-cart.actions';

export const appCartStateFeatureKey = 'AppCartStateKey';

export const initialCartState: CartState = {
  items: [],
  cartConfig: null,
};
