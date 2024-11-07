import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';

// Only accept thoes properties in the class, if there is otherProperty in Body, they will be ignored. (No error handle)
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  // TODO: need to finish the IsEnum validator
  // @IsEnum({value: ['admin', 'member']})
  role: string;
}
