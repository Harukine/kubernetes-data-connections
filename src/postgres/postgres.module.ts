import { Module } from '@nestjs/common';
import { PostgresController } from './postgres.controller';

@Module({
  controllers: [PostgresController]
})
export class PostgresModule {}
