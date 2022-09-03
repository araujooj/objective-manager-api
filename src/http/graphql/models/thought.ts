import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Thought')
export class Thought {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  content: string;
}
