import React from "react";
import MoviesInterface from "../../interfaces/MoviesInterface.interface";

interface IProps {
  movie?: MoviesInterface;
}

const MovieCover = ({ movie }: IProps) => {
  return (
    <div>
      {movie && movie.poster && (
        <img
          className="cover__img"
          src={movie.poster}
          alt={`cover ${movie.title}`}
        />
      )}
    </div>
  );
};

export default MovieCover;
