import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';
import { InboxService } from 'src/services/inbox.service';

import { DatabaseModule } from '../database/database.module';
import { InboxResolver } from './graphql/resolvers/inbox.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
    // SERVICES
    InboxService,
  ],
})
export class HttpModule {}
