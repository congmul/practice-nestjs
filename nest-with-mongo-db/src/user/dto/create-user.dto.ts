import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

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
  role: string;
}
