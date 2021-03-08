import * as redisStore from 'cache-manager-redis-store';
import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import {RedisController} from './redis.controller';
import {APP_INTERCEPTOR} from "@nestjs/core";

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
    controllers: [RedisController],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor
        }
    ]
})
export class RedisModule {
}
