import React from "react";
import MovieCover from "../atoms/MovieCover";
import MovieInfo from "../molecules/MovieInfo";
import MoviesInterface from "../../interfaces/MoviesInterface.interface";

interface iProps {
  movie?: MoviesInterface;
}

const MovieDetails = ({ movie }: iProps) => (
  <div>
    <MovieCover movie={movie} />
    <MovieInfo movie={movie} />
  </div>
);

export default MovieDetails;
