import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './modules/shared/components/nav-bar/nav-bar.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  appCartStateFeatureKey,
  cartReducer,
  initialCartState,
} from './modules/shared/state/shopping-cart/shopping-cart.reducer';
import { CartEffects } from './modules/shared/state/shopping-cart/shopping-cart.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NavBarComponent,
    StoreModule.forRoot({}),
    StoreModule.forFeature(appCartStateFeatureKey, cartReducer, {
      initialState: initialCartState,
    }),
    EffectsModule.forRoot(CartEffects),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
