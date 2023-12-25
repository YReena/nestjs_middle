import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, response, Response } from 'express';
import { AuthGuard } from 'src/guards/auth.guards';
import { ValidateCreateUserPipe } from 'src/pipes/validate-create-user.pipe';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/servies/users/users.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private userService: UsersService) {}
  @Get()
  getUser() {
    console.log('d');
    return this.userService.fetchUsers();
  }
  // @Post()
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   console.log('hello');
  //   response.send(request.body);
  // }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user)
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);

    return user;
  }
  @Post('create')
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    this.userService.createUsers(userData);
    response.send(userData);
    return { userData };
  }
}
