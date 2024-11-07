import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';

@Schema()
export class Team extends Document {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop()
  players: [
    { type: MongoSchema.Types.ObjectId, ref: 'Player' }
  ]

  @Prop({length: {gt: 1}})
  coaches: [
    { type: MongoSchema.Types.ObjectId, ref: 'Coach' }
  ]

  @Prop({ default: 23 })
  maxPlayers:number
}

export const TeamSchema = SchemaFactory.createForClass(Team);
