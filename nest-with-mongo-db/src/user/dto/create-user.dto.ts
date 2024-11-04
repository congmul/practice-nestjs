import { IsString, IsEmail, IsNumber } from 'class-validator';

// Only accept thoes properties in the class, if there is otherProperty in Body, they will be ignored. (No error handle)
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;
}
