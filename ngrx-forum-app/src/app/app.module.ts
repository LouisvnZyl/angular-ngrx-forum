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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEffects } from './modules/user/state/user.state.effects';
import { UserService } from './modules/user/services/user.service';

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
    EffectsModule.forRoot(CartEffects, UserEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    BrowserAnimationsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
