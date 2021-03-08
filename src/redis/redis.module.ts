import * as redisStore from 'cache-manager-redis-store';
import {CacheModule, Module} from '@nestjs/common';
import {RedisController} from './redis.controller';

@Module({
    imports: [
        CacheModule.registerAsync({
            useFactory: () => {
                return {
                    store: redisStore,
                    host: 'localhost',
                    port: 6379,
                }
            },
        }),
    ],
    controllers: [RedisController]
})
export class RedisModule {
}
