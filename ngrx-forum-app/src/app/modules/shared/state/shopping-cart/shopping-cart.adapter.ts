import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { CartItem } from '../interfaces/cart-item.interface';

export const cartAdapter: EntityAdapter<CartItem> =
  createEntityAdapter<CartItem>({
    selectId: (cartItem: CartItem) => cartItem.itemId,
  });
