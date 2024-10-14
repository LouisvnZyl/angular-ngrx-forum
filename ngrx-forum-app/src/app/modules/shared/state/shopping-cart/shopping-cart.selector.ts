import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './shopping-cart.state';
import { appCartStateFeatureKey } from './shopping-cart.reducer';
import { cartAdapter } from './shopping-cart.adapter';

const selectCartFeature = createFeatureSelector<CartState>(
  appCartStateFeatureKey
);

export const selectCartItems = createSelector(selectCartFeature, (state) =>
  cartAdapter.getSelectors().selectAll(state.items)
);

export const selectCartConfig = createSelector(
  selectCartFeature,
  (state: CartState) => state.cartConfig
);
