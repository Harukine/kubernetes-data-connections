import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { PostgresModule } from './postgres/postgres.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: 5432,
          username: 'postgres',
          password: 'test',
          database: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
      }),
      RedisModule,
      PostgresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
