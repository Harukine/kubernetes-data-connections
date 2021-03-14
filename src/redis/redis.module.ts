import * as redisStore from 'cache-manager-redis-store';
import {CacheModule, Module} from '@nestjs/common';
import {RedisController} from './redis.controller';

@Module({
    imports: [
        CacheModule.registerAsync({
            useFactory: () => {
                return {
                    store: redisStore,
                    host: process.env.REDIS_HOST,
                    port: process.env.REDIS_PORT,
                }
            },
        }),
    ],
    controllers: [RedisController]
})
export class RedisModule {
}
