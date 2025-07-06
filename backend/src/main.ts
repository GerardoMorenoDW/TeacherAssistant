import { NestFactory } from '@nestjs/core';
import { IaModule } from './ia/ia.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(IaModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe()); // activa la validación automática
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
