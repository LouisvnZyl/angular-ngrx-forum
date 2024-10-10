import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [[RouterModule.forChild(shopRoutes)]],
  exports: [RouterModule],
})
export class CartRoutingModule {}
