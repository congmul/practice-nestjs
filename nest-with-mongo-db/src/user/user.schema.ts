// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ unique:true, required: true })
  email: string;
  
  @Prop({ required: true })
  password: string;
  
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ enum: ['admin', 'member']})
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
