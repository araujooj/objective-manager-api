import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Okr')
export class Okr {
  @Field(() => ID)
  id: string;

  userId: string;

  @Field(() => String)
  title: string;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;

  @Field(() => Number)
  necessaryHours: number;

  @Field(() => Date)
  createdAt: Date;
}
