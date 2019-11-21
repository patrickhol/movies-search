import React from "react";
import MoviesInterface from "../../interfaces/MoviesInterface.interface";
import {
  DEFAULT_COVER,
  REGEXP_HTTP_FIND,
  HTTPS,
  DEFAULT_IMAGE_ALT
} from "../../constants/global.constants";
import { findAndReplace } from "../../utils/findAndReplace";

interface IProps {
  movie?: MoviesInterface;
}

const MovieCover = ({ movie }: IProps) => {
  return (
    <div>
      {movie && movie.poster ? (
        <img
          className="cover__img"
          src={findAndReplace(REGEXP_HTTP_FIND, HTTPS, movie.poster)}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = DEFAULT_COVER;
          }}
          alt={`cover ${movie.title}`}
        />
      ) : (
        <img className="cover__img" src={DEFAULT_COVER} alt={DEFAULT_IMAGE_ALT} />
      )}
    </div>
  );
};

export default MovieCover;
