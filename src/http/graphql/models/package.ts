import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Flow } from './flow';

enum PackageFocusType {
  CLIMBING_THE_MOUNTAIN = 'CLIMBING_THE_MOUNTAIN',
  SLOW_BURN = 'SLOW_BURN',
  EAT_THAT_FROG = 'EAT_THAT_FROG',
}

registerEnumType(PackageFocusType, {
  name: 'PackageFocusType',
  description: 'Available todos statuses',
});

@ObjectType('Package')
export class Package {
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

  flowId: string;

  @Field(() => Flow)
  flow: Flow;

  @Field(() => Date)
  createdAt: Date;
}
