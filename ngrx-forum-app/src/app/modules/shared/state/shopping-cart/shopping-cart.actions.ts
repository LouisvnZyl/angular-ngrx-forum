import { createAction, props } from '@ngrx/store';
import { CartItem } from '../interfaces/cart-item.interface';
import { CartConfig } from '../interfaces/cart-config.interface';

export const addToCart = createAction(
  '[Cart] ADD_CART_ITEM',
  props<{ cartItem: CartItem }>()
);

export const removeFromCart = createAction(
  '[Cart] REMOVE_CART_ITEM',
  props<{ itemId: number }>()
);

export const clearCart = createAction('[Cart] CLEAR_CART');

export const setShoppingCartConfig = createAction(
  '[Cart] SET_CART_CONFIG',
  props<{ cartConfig: CartConfig }>()
);
