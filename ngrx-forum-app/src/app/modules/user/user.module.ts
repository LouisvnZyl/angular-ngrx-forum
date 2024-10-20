import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user.routing.module';
import { UserPage } from './pages/user/user.page';
import { StoreModule } from '@ngrx/store';
import {
  appUserStateFeatureKey,
  initialUserState,
  userReducer,
} from './state/user.state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.state.effects';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    UserRoutingModule,
    UserPage,
    StoreModule.forFeature(appUserStateFeatureKey, userReducer, {
      initialState: initialUserState,
    }),
    EffectsModule.forFeature(UserEffects),
  ],
})
export class UserModule {}
