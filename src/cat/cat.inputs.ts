import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CreateCatInput {
  @Field(() => String)
  name: string;
}

@InputType()
export class ListCatInput {
  @Field(() => String, { nullable: true })
  _id?: Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class UpdateCatInput {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;
}