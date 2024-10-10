import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationOption } from '../../enums/navigation-option.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class NavBarComponent {
  public navigationOption = NavigationOption;

  constructor(private readonly _router: Router) {}

  public onNavigate(navigationOption: NavigationOption) {
    switch (navigationOption) {
      case NavigationOption.Cart:
        void this._router.navigateByUrl('cart');
        break;
      case NavigationOption.Shop:
        void this._router.navigateByUrl('shop');
        break;
      default:
        break;
    }
  }
}
