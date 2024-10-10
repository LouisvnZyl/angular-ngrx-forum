import { CartConfig } from '../interfaces/cart-config.interface';
import { CartItem } from '../interfaces/cart-item.interface';

export interface CartState {
  items: CartItem[];
  cartConfig: CartConfig | null;
}
