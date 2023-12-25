import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'Reena', email: 'reena@gmail.com' }];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUsers(userDetails: CreateUserType) {
    return this.fakeUsers.push(userDetails);
  }

  fetchUserById(id: number) {
    return { id, username: 'reena', email: 'yadav1993reena@gmail.com' };
  }
}
