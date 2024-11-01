import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

// {baseURL}/user
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Post()
    async create(@Body() createUserDto: { name: string; email: string; age: number }): Promise<User> {
        return this.userService.createUser(createUserDto.name, createUserDto.email, createUserDto.age)
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
