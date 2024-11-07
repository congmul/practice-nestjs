import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(email: string, password:string, firstName:string, lastName:string, role:string): Promise<User> {
    const exiting = await this.findOne(email);
    if(exiting){
      throw { type: "duplicated" }
    }
    const newUser = new this.userModel({ email, password, firstName, lastName, role });
    return newUser.save();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({email});
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
