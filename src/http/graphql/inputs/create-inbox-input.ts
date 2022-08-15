import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInboxInput {
  @Field()
  title: string;

  @Field({
    nullable: true,
  })
  link?: string;
}
