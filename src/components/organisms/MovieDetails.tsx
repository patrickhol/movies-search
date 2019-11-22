import React from "react";
import MovieCover from "../atoms/MovieCover";
import MovieInfo from "../molecules/MovieInfo";
import MoviesInterface from "../../interfaces/moviesInterface.interface";

interface iProps {
  movie?: MoviesInterface;
}

const MovieDetails = ({ movie }: iProps) => (
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
