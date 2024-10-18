import { Component } from '@angular/core';
import { ApplicationConfigService } from './modules/shared/services/application-config.service';
import { Store } from '@ngrx/store';
import { CartState } from './modules/shared/state/shopping-cart/shopping-cart.state';
import { setShoppingCartConfig } from './modules/shared/state/shopping-cart/shopping-cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly _appConfigService: ApplicationConfigService,
    private readonly _store: Store<CartState>
  ) {}

  private setUpAplicationConfig(): void {
    this._appConfigService.getShoppingCartConfig().subscribe((config) => {
      this._store.dispatch(setShoppingCartConfig({ cartConfig: config }));
    });
  }
}
