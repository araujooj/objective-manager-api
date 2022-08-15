import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/auth/current-user';
import { InboxService } from 'src/services/inbox.service';
import { CreateInboxInput } from '../inputs/create-inbox-input';
import { Inbox } from '../models/inbox';

@Resolver()
export class InboxResolver {
  constructor(private inboxService: InboxService) {}

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Inbox)
  createInbox(
    @Args('data') { title, link }: CreateInboxInput,
    @CurrentUser() user: AuthUser,
  ) {
    return this.inboxService.createInbox({
      title,
      link,
      userId: user.sub,
    });
  }

  @UseGuards(AuthorizationGuard)
  @Query(() => [Inbox])
  inboxes(@CurrentUser() user: AuthUser) {
    return this.inboxService.getInboxesByUserId(user.sub);
  }
}
