import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Inbox')
export class Inbox {
  @Field(() => ID)
  id: string;

  userId: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  link?: string;
}
