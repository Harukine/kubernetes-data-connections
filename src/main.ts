import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {

    // web app
    const app = await NestFactory.create(AppModule);

    app.connectMicroservice<MicroserviceOptions>(
        {
            transport: Transport.REDIS,
            options: {
                url: 'redis://localhost:6379',
            },
        });

    await app.startAllMicroservicesAsync();
    await app.listen(3001);
    console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
