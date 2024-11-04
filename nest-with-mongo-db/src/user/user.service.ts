import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(name: string, email: string, password:string, age: number): Promise<User> {
    const newUser = new this.userModel({ name, email, password, age });
    return newUser.save();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({email});
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
