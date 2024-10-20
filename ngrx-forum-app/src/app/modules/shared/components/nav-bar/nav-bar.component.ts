import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationOption } from '../../enums/navigation-option.enum';
import { Store } from '@ngrx/store';
import { CartState } from '../../state/shopping-cart/shopping-cart.state';
import { selectCartItems } from '../../state/shopping-cart/shopping-cart.selector';
import { map } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [CommonModule, RouterModule, MatIconModule],
  standalone: true,
})
export class NavBarComponent {
  public readonly cartItemCount$ = this._store
    .select(selectCartItems)
    .pipe(map((items) => items?.length ?? 0));

  public navigationOption = NavigationOption;

  constructor(
    private readonly _router: Router,
    private readonly _store: Store<CartState>
  ) {}

  public onNavigate(navigationOption: NavigationOption) {
    switch (navigationOption) {
      case NavigationOption.Cart:
        void this._router.navigateByUrl('cart');
        break;
      case NavigationOption.Shop:
        void this._router.navigateByUrl('shop');
        break;
      case NavigationOption.User:
        void this._router.navigateByUrl('user');
        break;
      default:
        break;
    }
  }
}
