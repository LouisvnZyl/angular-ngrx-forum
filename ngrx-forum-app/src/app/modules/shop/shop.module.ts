import { NgModule } from '@angular/core';
import { ShopsRoutingModule } from './shop.routing.module';
import { ShopPage } from './shop-page/shop.page';

@NgModule({
  imports: [ShopsRoutingModule, ShopPage],
})
export class ShopModule {}
