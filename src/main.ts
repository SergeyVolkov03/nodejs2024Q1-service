import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { readFile } from 'fs/promises';
import { SwaggerModule } from '@nestjs/swagger';
import { parse } from 'yaml';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const pathToFile = join(__dirname, '../doc/api.yaml');
  const doc = await readFile(pathToFile, 'utf-8');
  SwaggerModule.setup('doc', app, parse(doc));
  await app.listen(PORT);
}
bootstrap();
