import { Module } from '@nestjs/common';
import { UserController } from './users/Controllers/users/user.controller';
import { UsersService } from './users/servies/users/users.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
})
export class AppModule {}
