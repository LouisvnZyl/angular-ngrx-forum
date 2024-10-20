import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './shopping-cart.state';
import { appCartStateFeatureKey } from './shopping-cart.reducer';

const selectCartFeature = createFeatureSelector<CartState>(
  appCartStateFeatureKey
);

export const selectCartItems = createSelector(
  selectCartFeature,
  (state) => state.items
);

export const selectCartConfig = createSelector(
  selectCartFeature,
  (state: CartState) => state.cartConfig
);
