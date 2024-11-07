import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';

@Schema()
export class Player extends Document {
  @Prop({ required: true })
  firstName: String

  @Prop({ required: true })
  lastName: String

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Team', default: null })
  team: MongoSchema.Types.ObjectId

  @Prop()
  position: String
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
