import { EntityState } from '@ngrx/entity';
import { CartConfig } from '../interfaces/cart-config.interface';
import { CartItem } from '../interfaces/cart-item.interface';

export interface CartState {
  items: EntityState<CartItem>;
  cartConfig: CartConfig | null;
}
