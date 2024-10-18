import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SystemUser } from '../interfaces/system-user.interface';

@Injectable()
export class UserService {
  public getUsers(): Observable<SystemUser[]> {
    return of([
      {
        userId: 1,
        userName: 'LouisvanZyl',
        userEmail: 'louisvanzyl@email.com',
      },
      {
        userId: 2,
        userName: 'PeterParker',
        userEmail: 'peter-parker@email.com',
      },
      {
        userId: 3,
        userName: 'BenParker',
        userEmail: 'parker-ben@email.com',
      },
      {
        userId: 4,
        userName: 'MaryJane',
        userEmail: 'janemary@email.com',
      },
    ]);
  }
}
