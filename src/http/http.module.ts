import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { CacheModule } from '@nestjs/common';

import { join } from 'node:path';
import { InboxService } from '../services/inbox.service';
import { TodoService } from '../services/todo.service';

import { DatabaseModule } from '../database/database.module';
import { InboxResolver } from './graphql/resolvers/inbox.resolver';
import { TodoResolver } from './graphql/resolvers/todo.resolver';
import { NotionService } from '../services/notion.service';
import { ThoughtsResolver } from './graphql/resolvers/notion.resolver';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    CacheModule.register(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloFederationDriver,
      plugins: [],
    }),
  ],
  providers: [
    // RESOLVERS
    InboxResolver,
    TodoResolver,
    ThoughtsResolver,
    // SERVICES
    InboxService,
    TodoService,
    NotionService,
  ],
})
export class HttpModule {}
