import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Okr } from './okr';
import { Package } from './package';

enum TodoStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN PROGRESS',
  COMPLETED = 'COMPLETED',
  STUCK = 'STUCK',
}

enum TodoPriority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

registerEnumType(TodoStatus, {
  name: 'TodoStatus',
  description: 'Available todos statuses',
});

registerEnumType(TodoPriority, {
  name: 'TodoPriority',
  description: 'Available todos priority',
});

@ObjectType('Todo')
export class Todo {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => TodoPriority)
  priority: TodoPriority;

  @Field(() => TodoStatus)
  status: TodoStatus;

  @Field(() => Date)
  dueDate: Date;

  @Field(() => Number)
  necessaryHours: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Okr)
  okr: Okr;

  @Field(() => Package)
  package: Package;

  userId: string;

  okrId?: string;

  packageId?: string;
}
