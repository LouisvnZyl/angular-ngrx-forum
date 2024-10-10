import { combineReducers, createReducer, on } from '@ngrx/store';
import { CartState } from './shopping-cart.state';
import * as CartActions from './shopping-cart.actions';

export const appCartStateFeatureKey = 'AppCartStateKey';

export const initialCartState: CartState = {
  items: [],
  cartConfig: null,
};

const itemsReducer = createReducer(
  initialCartState.items,
  on(CartActions.addToCart, (state, { cartItem }) => [...state, cartItem]),
  on(CartActions.removeFromCart, (state, { itemId }) =>
    state.filter((cartItem) => cartItem.itemId != itemId)
  ),
  on(CartActions.clearCart, () => [])
);

const configReducer = createReducer(
  initialCartState.cartConfig,
  on(CartActions.setShoppingCartConfig, (state, { cartConfig }) => ({
    ...state,
    showCartTab: cartConfig.showCartTab,
    showItemCount: cartConfig.showItemCount,
  }))
);

export const cartReducer = combineReducers(
  {
    items: itemsReducer,
    cartConfig: configReducer,
  },
  initialCartState
);
