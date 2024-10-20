import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// import * as CartActions from './shopping-cart.actions';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { CartState } from './shopping-cart.state';
import { selectCartItems } from './shopping-cart.selector';

@Injectable()
export class CartEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly _store: Store<CartState>
  ) {}
}
