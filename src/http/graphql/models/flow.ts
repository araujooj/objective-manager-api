import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Package } from './package';

@ObjectType('Flow')
export class Flow {
  @Field(() => ID)
  id: string;

  userId: string;

  @Field(() => String)
  title: string;

  @Field(() => String!)
  description?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => [Package])
  packages: Package[];
}
