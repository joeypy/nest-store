import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignore other fields in the request
      forbidNonWhitelisted: true, // alert the client that the fields passed are not whitelisted
    })
  );
  await app.listen(3000);
}
bootstrap();
