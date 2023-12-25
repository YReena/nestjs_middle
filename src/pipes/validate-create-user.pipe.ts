import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('hello');
    console.log(value);
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      throw new HttpException(
        'Invalid Data: Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return { ...value, age: parseAgeToInt };
    }
  }
}
