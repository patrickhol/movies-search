import React from 'react';
import Subtitle from '../atoms/Subtitle';
import Genre from '../atoms/Genre';
import Rating from './Rating';
import Title from '../atoms/Title';
import Summary from '../atoms/Summary';
import MoviesInterface from '../../interfaces/MoviesInterface.interface';
import {
  TITLE_NOT_AVAILABLE,
  SUMMARY,
  SUMMARY_NOT_AVAILABLE,
  GENRE,
  GENRE_NOT_AVAILABLE,
  RATING,
  RATING_NOT_AVAILABLE,
} from '../../constants/text.constants';

interface MovieInfoProps {
  movie?: MoviesInterface;
}

const MovieInfo = ({ movie }: MovieInfoProps) => {
  return (
    <div>
      <Title movieTitle={movie ? movie.title : TITLE_NOT_AVAILABLE} />
      <Subtitle name={SUMMARY} />
      <Summary description={movie ? movie.plot : SUMMARY_NOT_AVAILABLE} />
      <Subtitle name={GENRE} />
      <Genre data={movie ? movie.genres : [GENRE_NOT_AVAILABLE]} />
      <Subtitle name={RATING} />
      <Rating
        ratingData={movie ? movie.imdb.rating : RATING_NOT_AVAILABLE}
        votes={movie ? movie.imdb.votes : RATING_NOT_AVAILABLE}
      />
    </div>
  );
};

export default MovieInfo;
