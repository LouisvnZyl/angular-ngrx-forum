import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem } from '../../shared/state/interfaces/cart-item.interface';
import { Store } from '@ngrx/store';
// import { addToCart } from '../../shared/state/shopping-cart/shopping-cart.actions';

@Component({
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ShopPage {
  constructor(private readonly store: Store) {}

  public readonly shoppingItems: CartItem[] = [
    { itemId: 1, itemName: 'Apple', itemCost: 1 },
    { itemId: 2, itemName: 'Banana', itemCost: 0.5 },
    { itemId: 3, itemName: 'Orange', itemCost: 0.8 },
    { itemId: 4, itemName: 'Grapes', itemCost: 2 },
    { itemId: 5, itemName: 'Watermelon', itemCost: 3 },
  ];

  addToCart(item: CartItem) {
    // this.store.dispatch(addToCart({ cartItem: item }));
  }
}
