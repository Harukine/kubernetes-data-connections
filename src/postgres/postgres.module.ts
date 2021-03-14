import { Module } from '@nestjs/common';
import { PostgresController } from './postgres.controller';
import { PostgresService } from './postgres.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PostgresController],
  providers: [PostgresService]
})
export class PostgresModule {}
