import React from "react";
import MovieCover from "../components/atoms/MovieCover";
import MovieInfo from "../components/molecules/MovieInfo";

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
