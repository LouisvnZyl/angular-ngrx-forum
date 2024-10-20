import { combineReducers, createReducer, on } from '@ngrx/store';
import { CartState } from './shopping-cart.state';
import * as CartActions from './shopping-cart.actions';
import { cartAdapter } from './shopping-cart.adapter';

export const appCartStateFeatureKey = 'ShoppingCart';

export const initialCartState: CartState = cartAdapter.getInitialState({
  items: cartAdapter.getInitialState(),
  cartConfig: null,
});

const itemsReducer = createReducer(
  initialCartState.items,
  on(CartActions.addToCart, (state, action) =>
    cartAdapter.addOne(action.cartItem, state)
  ),
  on(CartActions.removeFromCart, (state, action) =>
    cartAdapter.removeOne(action.itemId, state)
  ),
  on(CartActions.clearCart, (state) => cartAdapter.removeAll(state))
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
