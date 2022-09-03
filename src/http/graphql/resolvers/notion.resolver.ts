import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { NotionService } from '../../../services/notion.service';
import { CreateThoughtInput } from '../inputs/create-thought-input';
import { Thought } from '../models/Thought';

@Resolver()
export class ThoughtsResolver {
  constructor(private notionService: NotionService) {}

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Thought)
  createThought(@Args('data') data: CreateThoughtInput) {
    return this.notionService.createThought(data.content);
  }
}
