// src/movie/movie.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Post()
  create(@Body() movie: CreateMovieDto): number {
    return this.movieService.create(movie);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() movie: CreateMovieDto): boolean {
    return this.movieService.update(id, movie);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): boolean {
    return this.movieService.delete(id);
  }
}
