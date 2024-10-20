import { EntityState } from '@ngrx/entity';
import { UserEntity } from './interfaces/user-entity.interface';

export interface UserState {
  users: EntityState<UserEntity>;
}
