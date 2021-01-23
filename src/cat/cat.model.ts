import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';

@ObjectType()
@Schema()
export class Cat {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

}

export type CatDocument = Cat & Document;

export const CatSchema = SchemaFactory.createForClass(Cat);

