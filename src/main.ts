import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {

    // web app
    const app = await NestFactory.create(AppModule);

    await app.listen(3001);
    console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
