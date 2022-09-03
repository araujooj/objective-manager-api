import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field({
    nullable: true,
  })
  @Field()
  status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'STUCK';

  @Field({
    nullable: true,
  })
  @Field()
  priority: 'HIGH' | 'MEDIUM' | 'LOW';

  @Field()
  dueDate: Date;

  @Field()
  inboxId: string;

  @Field()
  necessaryHours: number;

  @Field({
    nullable: true,
  })
  okrId?: string;

  @Field({
    nullable: true,
  })
  packageId?: string;
}
