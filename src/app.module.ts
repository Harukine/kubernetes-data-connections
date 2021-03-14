import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { PostgresModule } from './postgres/postgres.module';

@Module({
  imports: [RedisModule, PostgresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
