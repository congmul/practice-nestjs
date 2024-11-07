import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';

@Schema()
export class Coach extends Document {
  @Prop({ required: true })
  firstName: String

  @Prop({ required: true })
  lastName: String

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Team', default: null })
  team: MongoSchema.Types.ObjectId

  @Prop()
  position: String
}

export const CoachSchema = SchemaFactory.createForClass(Coach);
