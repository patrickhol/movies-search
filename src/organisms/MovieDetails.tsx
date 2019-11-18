import React from "react";
import MovieCover from "../atoms/MovieCover";
import MovieInfo from "../molecules/MovieInfo";

interface Props {}

const MovieDetails: React.FC<Props> = () => {
  return (
    <div>
      <MovieCover />
      <MovieInfo />
    </div>
  );
};

export default MovieDetails;
