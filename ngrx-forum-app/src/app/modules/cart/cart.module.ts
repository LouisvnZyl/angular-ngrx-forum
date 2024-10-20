import { NgModule } from '@angular/core';
import { CartPage } from './cart-page/cart.page';
import { CartRoutingModule } from './cart.routing.module';

@NgModule({
  imports: [CartRoutingModule, CartPage],
})
export class CartModule {}
