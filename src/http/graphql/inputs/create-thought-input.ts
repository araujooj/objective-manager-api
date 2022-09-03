import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateThoughtInput {
  @Field()
  content: string;
}
