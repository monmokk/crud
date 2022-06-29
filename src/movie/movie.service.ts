import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  findAll():Movie[] {
    return this.movies;
  }

  findOne(id: number): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`)
    }
    return movie;
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.findOne(id);
    this.remove(id);
    this.movies.push({ ...movie, ...updateData });
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
