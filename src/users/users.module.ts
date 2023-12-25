import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './Controllers/users/user.controller';
import { ExampleMiddleware } from 'src/middlewares/example.middleware';
import { UsersService } from './servies/users/users.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET });
  }
}
