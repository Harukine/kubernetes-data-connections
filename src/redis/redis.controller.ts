import {Controller, Inject} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {REDIS_SERVICE} from "./redis.constants";

@Controller('redis')
export class RedisController {
    constructor(@Inject(REDIS_SERVICE) private readonly client: ClientProxy) {}
}
