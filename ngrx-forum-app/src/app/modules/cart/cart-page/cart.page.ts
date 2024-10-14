import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartState } from '../../shared/state/shopping-cart/shopping-cart.state';
import { Store } from '@ngrx/store';
import { selectCartItems } from '../../shared/state/shopping-cart/shopping-cart.selector';
import {
  clearCart,
  removeFromCart,
} from '../../shared/state/shopping-cart/shopping-cart.actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.page.html',
  imports: [CommonModule],
  standalone: true,
})
export class CartPage {
  constructor(private readonly _store: Store<CartState>) {
    this.cartItems$.subscribe((data) => console.log('Cart Data', data));
  }

  public readonly cartItems$ = this._store.select(selectCartItems);

  public removeCartItem(itemId: number): void {
    this._store.dispatch(removeFromCart({ itemId: itemId }));
  }

  public clearCart(): void {
    this._store.dispatch(clearCart());
  }
}
