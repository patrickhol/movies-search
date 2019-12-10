import React from 'react';
import MovieCover from '../atoms/MovieCover';
import MovieInfo from '../molecules/MovieInfo';
import MoviesInterface from '../../interfaces/MoviesInterface.interface';

interface MovieDetailsProps {
  movie?: MoviesInterface;
}

const MovieDetails = ({ movie }: MovieDetailsProps) => (
  <>
    <div className="cover">
      <MovieCover movie={movie} />
    </div>
    <div className="info">
      <MovieInfo movie={movie} />
    </div>
  </>
);

export default MovieDetails;
