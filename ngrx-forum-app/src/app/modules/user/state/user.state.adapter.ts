import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { UserEntity } from './interfaces/user-entity.interface';

export const systemUserAdapter: EntityAdapter<UserEntity> =
  createEntityAdapter<UserEntity>({
    selectId: (systemUser: UserEntity) => systemUser.userEmail,
    sortComparer: (entityA: UserEntity, entityB: UserEntity) =>
      entityA.userName.localeCompare(entityB.userName),
  });
