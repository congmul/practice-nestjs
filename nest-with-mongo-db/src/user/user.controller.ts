import { Controller, Post, Body, Get, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';

// {baseURL}/user
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try{
      return await this.userService.createUser(
        createUserDto.email,
        createUserDto.password,
        createUserDto.firstName,
        createUserDto.lastName,
        createUserDto.role,
      );
    }catch(error){
      if(error.type === 'duplicated'){
        throw new HttpException(
          {
            // TODO: need to find correct httpStatus
            status: HttpStatus.CONFLICT,
            error: `the email, "${createUserDto.email}", is already existing`
          },
          HttpStatus.CONFLICT, 
          {
            cause: error
          }
        )
      }
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message'
        },
        HttpStatus.FORBIDDEN, 
        {
          cause: error
        }
      )
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
