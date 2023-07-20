import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  favoriteProducts: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
