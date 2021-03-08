import {CACHE_MANAGER, Controller, Get, Inject, Param} from '@nestjs/common';
import {Cache} from 'cache-manager';

@Controller('redis')
export class RedisController {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    @Get(':id')
    async getKey(@Param('id') id: string) {
        const value = await this.cacheManager.get(id);
        if (value) {
            return `The value of ${id} is ${value}`;
        } else {
            return `The key ${id} not found`;
        }
    }

    @Get(':id/:value')
    async setKey(@Param('id') id: string, @Param('value') value: string) {
        await this.cacheManager.set(id, value, { ttl: 1000 })
        return `The key ${id} has been set to ${value}`;
    }
}
