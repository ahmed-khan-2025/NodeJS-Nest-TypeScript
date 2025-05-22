// src/app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    // Serve files from frontend directory
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'), // Adjust based on actual location
      exclude: ['/api*'], // Optional: if your APIs are prefixed with /api
    }),
    MovieModule,
  ],
})
export class AppModule {}