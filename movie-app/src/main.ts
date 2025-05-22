// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
    // Serve static files from /frontend
  // app.use('/', express.static(path.join(__dirname, '..', '..', 'frontend')));
  app.use('/', express.static(path.join(__dirname, '..', 'frontend')));
  console.log(`🚀 Server running at http://localhost:3000`);
}
bootstrap();
