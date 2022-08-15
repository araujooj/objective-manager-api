import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInboxInput {
  @Field()
  title: string;

  @Field()
  link?: string;
}
