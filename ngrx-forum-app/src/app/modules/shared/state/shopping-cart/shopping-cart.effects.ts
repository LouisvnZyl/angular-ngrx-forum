import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as CartActions from './shopping-cart.actions';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { CartState } from './shopping-cart.state';

@Injectable()
export class CartEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<{ cartState: CartState }>
  ) {}

  public removeCartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeFromCart),
      switchMap((itemId) => {
        return this.store.select('cartState').pipe(
          map((cartState) => {
            const filteredItems = cartState.items.filter(
              (cartItem) => cartItem.itemId !== itemId.itemId
            );
            return CartActions.removeFromCartSuccess({
              cartItems: filteredItems,
            });
          })
        );
      })
    )
  );
}
