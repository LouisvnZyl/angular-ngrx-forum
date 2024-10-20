import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartConfig } from 'src/app/modules/shared/state/interfaces/cart-config.interface';

@Injectable({ providedIn: 'root' })
export class ApplicationConfigService {
  public getShoppingCartConfig(): Observable<CartConfig> {
    return of({ showItemCount: true, showCartTab: true } as CartConfig);
  }
}
