import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';

import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    // DatabaseModule,
    // GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    //   autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    //   driver: ApolloFederationDriver,
    //   plugins: [],
    // }),
  ],
  providers: [],
})
export class HttpModule {}
