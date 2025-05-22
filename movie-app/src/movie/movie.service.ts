// src/movie/movie.service.ts
import { Injectable } from '@nestjs/common';
import db from '../database/db';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  getAll(): Movie[] {
    return db.prepare('SELECT * FROM movies').all() as Movie[];
  }

  create(movie: CreateMovieDto): number {
    const stmt = db.prepare('INSERT INTO movies (title, director, year) VALUES (?, ?, ?)');
    const result = stmt.run(movie.title, movie.director, movie.year);
    return result.lastInsertRowid as number;
  }

  update(id: number, movie: CreateMovieDto): boolean {
    const stmt = db.prepare('UPDATE movies SET title = ?, director = ?, year = ? WHERE id = ?');
    const result = stmt.run(movie.title, movie.director, movie.year, id);
    return result.changes > 0;
  }

  delete(id: number): boolean {
    const stmt = db.prepare('DELETE FROM movies WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  }
}
